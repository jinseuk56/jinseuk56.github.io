# Jinseok Ryu

Source for [jinseuk56.github.io](https://jinseuk56.github.io), a personal academic website built with Jekyll and al-folio.

## Content

- `_data/cv.yml` — curriculum vitae
- `_bibliography/papers.bib` — publication record
- `_posts/` — personal notes and future research notes
- `_projects/` — long-lived research and software projects

Posts use one of two categories:

- `personal` for personal notes and photo journals
- `research` for research notes, methods, and project updates

## Local preview

```bash
bundle install
npm ci
bundle exec jekyll serve --baseurl "" --host 127.0.0.1 --port 4001
```

The local site is available at <http://127.0.0.1:4001>. The command is meant to keep running while you browse the site; stop it with <kbd>Ctrl</kbd>+<kbd>C</kbd>.

To enable automatic browser refresh, add `--livereload --livereload-port 35730` to the command. Port 35729 is Jekyll's default live-reload port and may already be in use.
