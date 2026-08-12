import { createHash } from "node:crypto";
import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import exifr from "exifr";
import sharp from "sharp";

const sourceDirectory = process.argv[2] || "/home/ryuserve/github_repo/resources/photos";
const outputDirectory = path.resolve("assets/img/home");
const manifestPath = path.resolve("assets/data/home-photos.json");
const imageExtensions = new Set([".heic", ".jpeg", ".jpg", ".png"]);

const fallbackYear = (filename) => filename.match(/(?:19|20)\d{2}/)?.[0] || null;
const photoId = (filename) => createHash("sha256").update(filename).digest("hex").slice(0, 12);

const files = (await readdir(sourceDirectory, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase()))
  .map((entry) => entry.name)
  .sort((first, second) => first.localeCompare(second));

if (files.length === 0) {
  throw new Error(`No supported images found in ${sourceDirectory}`);
}

await mkdir(outputDirectory, { recursive: true });
await mkdir(path.dirname(manifestPath), { recursive: true });

const photos = [];
const skipped = [];
let sourceBytes = 0;
let outputBytes = 0;

for (const filename of files) {
  try {
    const sourcePath = path.join(sourceDirectory, filename);
    const id = photoId(filename);
    const outputName = `${id}.webp`;
    const outputPath = path.join(outputDirectory, outputName);
    const [metadata, exif, sourceInfo] = await Promise.all([
      sharp(sourcePath, { animated: false, failOn: "none" }).metadata(),
      exifr.parse(sourcePath, ["DateTimeOriginal", "CreateDate", "ModifyDate"]).catch(() => null),
      stat(sourcePath),
    ]);

    await sharp(sourcePath, { animated: false, failOn: "none" })
      .rotate()
      .resize({ width: 720, height: 720, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80, smartSubsample: true })
      .toFile(outputPath);

    const outputInfo = await stat(outputPath);
    const capturedAt = exif?.DateTimeOriginal || exif?.CreateDate || exif?.ModifyDate;
    const year = capturedAt ? String(capturedAt.getFullYear()) : fallbackYear(filename);
    sourceBytes += sourceInfo.size;
    outputBytes += outputInfo.size;
    photos.push({
      file: outputName,
      year: year || "Undated",
      orientation: metadata.width >= metadata.height ? "landscape" : "portrait",
    });
  } catch (error) {
    skipped.push({ filename, error: error.message.split("\n")[0] });
  }
}

await writeFile(manifestPath, `${JSON.stringify({ photos }, null, 2)}\n`, "utf8");

console.log(`Prepared ${photos.length} metadata-free WebP thumbnails.`);
if (skipped.length > 0) {
  console.warn(`Skipped ${skipped.length} unreadable source image(s):`);
  skipped.forEach(({ filename }) => console.warn(`- ${filename}`));
}
console.log(`Source: ${(sourceBytes / 1024 / 1024).toFixed(1)} MB`);
console.log(`Web assets: ${(outputBytes / 1024 / 1024).toFixed(1)} MB`);
