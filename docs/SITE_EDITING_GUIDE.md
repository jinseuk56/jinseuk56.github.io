# Site editing guide

This is the working guide for this repository. It describes the pages that are currently visible and where their content comes from. The site uses Jekyll with the al-folio theme.

## Before editing

- Edit source files, never `_site/`; `_site/` is regenerated and is not the source of the website.
- Keep the YAML front matter between the opening and closing `---` valid. Indentation matters in YAML.
- Use UTF-8 text files and normal Markdown for page and post content.
- `docs/` is deliberately excluded from the built website, so this manual is available in the repository but does not create a menu item or public page.

### Preview locally (Ubuntu)

From the repository root:

```bash
bundle exec jekyll serve --baseurl "" --host 127.0.0.1 --port 4001
```

Open `http://127.0.0.1:4001/`. Keep the command running while you edit; this is expected behaviour, not a stalled build. Stop it with <kbd>Ctrl</kbd>+<kbd>C</kbd>. If a build fails, the first error normally identifies the file and line to correct.

For automatic browser refresh, use `bundle exec jekyll serve --livereload --livereload-port 35730 --baseurl "" --host 127.0.0.1 --port 4001`. The default live-reload port (`35729`) can be occupied by another process.

To run a one-off production-style check instead:

```bash
bundle exec jekyll build
```

## Current menu map

The theme provides the Home link automatically. The remaining main-navigation entries are controlled by `nav: true` and `nav_order` in the front matter of each page. Smaller links under **Blog** are regular links in `_pages/blog.md`; they are not automatic dropdown menus.

| Visible menu or link | URL              | Main file to edit          | Content source                                                   |
| -------------------- | ---------------- | -------------------------- | ---------------------------------------------------------------- |
| Home                 | `/`              | `_pages/about.md`          | Title, subtitle, and the randomized photo contact sheet.         |
| Projects             | `/projects/`     | `_pages/projects.md`       | Files you create in `_projects/`.                                |
| Publications         | `/publications/` | `_pages/publications.md`   | `_bibliography/papers.bib`.                                      |
| Blog                 | `/blog/`         | `_pages/blog.md`           | All files in `_posts/`.                                          |
| CV                   | `/cv/`           | `_pages/cv.md`             | `_data/cv.yml` plus `_includes/cv/`.                             |
| Personal notes       | `/notes/`        | `_pages/personal-notes.md` | Posts whose category is `personal`.                              |
| Research notes       | `/research/`     | `_pages/research-notes.md` | Posts whose category is `research`.                              |
| Photo archive        | `/photos/`       | `_pages/photos.md`         | Images found in post source files.                               |

The old `/ryuserve/` and `/ryuserve/cv/` pages are redirects for old links. Keep them unless you intentionally want to break old bookmarks.

## Home

Edit `_pages/about.md`.

The Home page is intentionally minimal at present. Change these fields to change the visible name and professional title:

```yaml
title: Home
subtitle: Electron Microscopist & Materials Scientist
```

`profile: false`, `social: false`, `selected_papers: false`, and the disabled sections keep the page focused on its heading and photo contact sheet. Turn one of those options on only when you want the corresponding al-folio component to appear.

### Home photo contact sheet

The source photos remain private in `/home/ryuserve/github_repo/resources/photos`; do **not** copy those originals into this repository. The committed web copies are generated under `assets/img/home/`, with their year metadata stored in `assets/data/home-photos.json`.

After adding or replacing source photos, run this from the site repository:

```bash
npm ci
npm run photos:prepare
```

The command recursively scans supported JPEG, PNG, and HEIC inputs in that folder and its subfolders (for example, `set_01/` and `set_02/`) and converts them into metadata-free 720-pixel WebP files. It removes EXIF and GPS metadata, reads the capture year from EXIF when available, and falls back to a year in the filename. The Home page shows 48 random photos at a time; hovering, focusing, or tapping a tile reveals its year, and **Shuffle photos** selects a new set.

If a source file cannot be read, the command reports it and continues. Convert or repair that source file separately, then run the command again.

## CV

### Content

Edit `_data/cv.yml`. This is the single source of CV content.

- Contact information: `name`, `label`, `email`, and `social_networks` at the top of the file.
- Employment: `sections: Experience`.
- Education: `sections: Education`.
- Research & Capabilities, publications, presentations, and Other Experience: their matching names under `sections`. `Other Experience` combines teaching activities and awards.

Use two spaces for each YAML indentation level. Dates use `YYYY-MM-DD`; the CV displays the year. For a current role use `end_date: present`.

Example experience entry:

```yaml
- company: Example Institute
  position: Research Scientist
  location: Seoul, South Korea
  start_date: "2026-03-01"
  end_date: present
  summary: Optional one-line context.
```

### Layout

- `_pages/cv.md` controls the page URL, title, and whether it appears in the main navigation.
- `_includes/cv/render.liquid` is the CV page renderer and contains the date/location alignment rules.
- `_includes/cv/publications.liquid` and `_includes/cv/presentations.liquid` control the compact publication-style records.
- `_includes/cv/skills.liquid` controls Skills.

Edit the YAML for content. Edit the Liquid files only when changing the format for every entry.

## Publications

### Add or edit a paper

Edit `_bibliography/papers.bib`. One BibTeX entry produces one publication record on `/publications/` and, when included in `_data/cv.yml`, one CV record.

Minimal example:

```bibtex
@article{surname2026shorttitle,
  title   = {Paper title},
  author  = {Ryu, J. and Coauthor, A.},
  journal = {Journal Name},
  year    = {2026},
  doi     = {10.1234/example.2026.001}
}
```

- Use the full DOI value only, without `https://doi.org/`, in `doi`.
- The Publications page creates DOI and BibTeX buttons from this field.
- The site customizes the author display so `J. Ryu` is emphasized. Keep the author notation consistent with existing entries.
- Use `†` for first/co-first author and `*` for corresponding author where applicable; the legend is shown on the page.
- `selected = {true}` marks a paper as selected for theme features that use selected papers.

### Publication page layout

- `_pages/publications.md` supplies the title and invokes the bibliography.
- `_layouts/bib.liquid` controls the entry layout, including DOI and BibTeX buttons. Do not remove the `bibtex` control if you want the expandable BibTeX button.

The CV publication list is deliberately separate. To add a publication to it, add the matching structured entry under `sections: Publications` in `_data/cv.yml`.

## Projects

The `/projects/` page is populated from `_projects/`: one Markdown file per research theme or software project. The file name becomes part of the URL. Keep each entry concise—the Projects page is a portfolio preview, while the linked repository and Publications page carry the full technical record.

Example: create `_projects/caetomo.md`:

```markdown
---
layout: page
title: CAETomo
description: Electron tomography processing and analysis tools.
img: assets/img/projects/caetomo.png
importance: 1
category: software
giscus_comments: false
---

Use a short introduction, one informative image where it improves the page, and only a few selected paper or repository links.

- Link to a repository, documentation, paper, or demo.
- State your role and the methods used.
```

Important fields:

- `title`: card heading.
- `description`: short card summary.
- `img`: optional card image, stored under `assets/img/`.
- `importance`: numeric order; lower numbers appear first.
- `category`: must match one of `research` or `software`, because `_pages/projects.md` currently displays only those categories.

Project images are stored in `assets/img/projects/`. Keep the original image there; the GitHub Pages build automatically creates 480 px, 800 px, and 1400 px WebP derivatives for visitors. Local previews deliberately skip that conversion, so ImageMagick is not required on your computer.

To add a new visible project category, change this line in `_pages/projects.md`:

```yaml
display_categories: [research, software]
```

For example, add `outreach` there and use `category: outreach` in relevant project files. The current page uses a consistent two-column card grid for every category.

## Blog and its sub-menus

### Add a post

Create `_posts/YYYY-MM-DD-short-title.md`. The date in the file name is required by Jekyll.

Personal-note example:

```markdown
---
title: A note title
layout: post
author: ryuserve
categories: [personal]
tags: [writing]
---

Write the post here in Markdown.
```

Research-note example:

```yaml
categories: [research]
tags: [project, microscopy]
```

The category determines the sub-menu:

- `categories: [personal]` appears on **Personal notes**.
- `categories: [research]` appears on **Research notes**.

Posts appear on the main Blog page regardless of category. `tags` create tag archive links and are useful for cross-cutting topics such as `photo`, `writing`, `4d-stem`, or `software`.

Optional post fields already used by the site include:

```yaml
description: One-sentence preview shown on the Blog page.
featured: true
thumbnail: assets/img/example-thumbnail.jpg
```

### Edit the Blog landing page

Edit `_pages/blog.md` to change:

- the Blog menu label (`title`);
- pagination (`per_page`);
- the three sub-menu links near the top;
- the order and appearance of the post list.

Edit `blog_name` and `blog_description` in `_config.yml` to change the Blog header text.

### Personal notes and Research notes

- `_pages/personal-notes.md` filters posts with category `personal`.
- `_pages/research-notes.md` filters posts with category `research`.

Normally, you only need to assign the correct category to a post. Edit these page files only to change their title, introduction, URL, or filtering rule.

### Photo archive and photo posts

The Photo archive is generated from images in every post by `_plugins/collect-post-images.rb`. You normally do not edit that plugin.

For a photo-card post, add the grid stylesheet and use this structure:

```html
<link rel="stylesheet" href="/assets/css/post-grid.css">

<div class="photo-grid">
  <div class="photo-grid-item">
    <img src="https://example.com/photo.jpg" alt="Short, useful description" loading="lazy">
    <div class="photo-grid-caption">Visible caption below the photo.</div>
  </div>
</div>
```

- `alt` is an accessibility description and is shown by browsers if an image cannot load.
- `.photo-grid-caption` is the visible caption.
- Use one `photo-grid-item` per image.
- The grid styling is in `assets/css/post-grid.css`; edit it only for a site-wide card-style change.

`_pages/photos.md` supplies the archive page. `_includes/photo-tile.html` controls the archive gallery appearance; `assets/css/photo-tile.css` controls its styling.

## Site-wide identity and social links

- `_config.yml`: site title, subtitle, description, blog name, theme options, and build settings.
- `_data/socials.yml`: email, GitHub, LinkedIn, ORCID, and other site-wide social links.
- `assets/img/favicons/`: browser icon and avatar assets.

Change site identity carefully and then rebuild locally. Do not edit generated copies under `_site/`.

## Add, remove, or rename a main menu item

Every page in `_pages/` can become a main menu item. Its front matter needs:

```yaml
title: Menu Label
permalink: /your-page/
nav: true
nav_order: 5
```

Use a unique `nav_order`. Home is the theme's built-in navigation link, so do not set `nav: true` on `_pages/about.md`. To hide another existing page while retaining its URL, set `nav: false`. To rename it, change `title`. To remove it completely, first check whether other pages link to its `permalink`.

## Safe editing checklist

1. Make the source edit.
2. Run `bundle exec jekyll serve --baseurl "" --host 127.0.0.1 --port 4001` and check the relevant URL.
3. Run `bundle exec jekyll build` before committing or publishing.
4. Use `git status` to confirm that only the intended files changed.
5. Do not commit `_site/`, `.jekyll-cache/`, or local temporary files.
