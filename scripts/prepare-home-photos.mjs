import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import exifr from "exifr";
import sharp from "sharp";

const sourceDirectory = process.argv.slice(2).find((argument) => !argument.startsWith("--")) || "/home/ryuserve/github_repo/resources/photos";
const pruneMissing = process.argv.includes("--prune");
const outputDirectory = path.resolve("assets/img/home");
const manifestPath = path.resolve("assets/data/home-photos.json");
const imageExtensions = new Set([".heic", ".jpeg", ".jpg", ".png"]);

const fallbackYear = (filename) => filename.match(/(?:19|20)\d{2}/)?.[0] || null;
const photoId = (relativePath) => createHash("sha256").update(relativePath).digest("hex").slice(0, 12);

const collectFiles = async (directory, relativeDirectory = "") => {
  const entries = await readdir(directory, { withFileTypes: true });
  const collected = [];

  for (const entry of entries.sort((first, second) => first.name.localeCompare(second.name))) {
    const relativePath = path.join(relativeDirectory, entry.name);
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      collected.push(...(await collectFiles(absolutePath, relativePath)));
    } else if (entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase())) {
      collected.push({ absolutePath, relativePath });
    }
  }

  return collected;
};

const files = await collectFiles(sourceDirectory);

if (files.length === 0) {
  throw new Error(`No supported images found in ${sourceDirectory}`);
}

await mkdir(outputDirectory, { recursive: true });
await mkdir(path.dirname(manifestPath), { recursive: true });

let previousPhotos = [];
try {
  const previousManifest = JSON.parse(await readFile(manifestPath, "utf8"));
  previousPhotos = previousManifest.photos || [];
} catch (error) {
  if (error.code !== "ENOENT") {
    console.warn(`Could not read the existing photo manifest: ${error.message.split("\n")[0]}`);
  }
}

const generatedPhotos = [];
const skipped = [];
let sourceBytes = 0;
let outputBytes = 0;

for (const { absolutePath: sourcePath, relativePath } of files) {
  try {
    const id = photoId(relativePath);
    const outputName = `${id}.webp`;
    const outputPath = path.join(outputDirectory, outputName);
    const [exif, sourceInfo] = await Promise.all([
      exifr.parse(sourcePath, ["DateTimeOriginal", "CreateDate", "ModifyDate"]).catch(() => null),
      stat(sourcePath),
    ]);

    const outputInfo = await sharp(sourcePath, { animated: false, failOn: "none" })
      .rotate()
      .resize({ width: 720, height: 720, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80, smartSubsample: true })
      .toFile(outputPath);

    const capturedAt = exif?.DateTimeOriginal || exif?.CreateDate || exif?.ModifyDate;
    const year = capturedAt ? String(capturedAt.getFullYear()) : fallbackYear(relativePath);
    sourceBytes += sourceInfo.size;
    outputBytes += outputInfo.size;
    generatedPhotos.push({
      file: outputName,
      year: year || "Undated",
      orientation: outputInfo.width >= outputInfo.height ? "landscape" : "portrait",
    });
  } catch (error) {
    skipped.push({ filename: relativePath, error: error.message.split("\n")[0] });
  }
}

const photosByFile = new Map(previousPhotos.map((photo) => [photo.file, photo]));
generatedPhotos.forEach((photo) => photosByFile.set(photo.file, photo));
const photos = pruneMissing ? generatedPhotos : [...photosByFile.values()];

if (pruneMissing) {
  const expectedFiles = new Set(photos.map(({ file }) => file));
  const staleFiles = previousPhotos.map(({ file }) => file).filter((file) => file.endsWith(".webp") && !expectedFiles.has(file));
  await Promise.all(staleFiles.map((file) => unlink(path.join(outputDirectory, file))));
  if (staleFiles.length > 0) {
    console.log(`Removed ${staleFiles.length} stale generated thumbnail(s).`);
  }
}

await writeFile(manifestPath, `${JSON.stringify({ photos }, null, 2)}\n`, "utf8");

console.log(`Prepared ${generatedPhotos.length} metadata-free WebP thumbnail(s).`);
console.log(`Gallery manifest contains ${photos.length} photo(s).`);
if (skipped.length > 0) {
  console.warn(`Skipped ${skipped.length} unreadable source image(s):`);
  skipped.forEach(({ filename }) => console.warn(`- ${filename}`));
}
console.log(`Source: ${(sourceBytes / 1024 / 1024).toFixed(1)} MB`);
console.log(`Web assets: ${(outputBytes / 1024 / 1024).toFixed(1)} MB`);
