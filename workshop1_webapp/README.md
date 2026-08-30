# Workshop 1 — Semantic HTML

Static practice site built with plain, semantic HTML — no CSS yet. The goal of this workshop is
correct use of HTML5 structural elements: sectioning tags, media with captions, a data table, and
a contact form.

## Structure

```
my-site/
├── index.html            # home page (About Me)
├── pages/
│   ├── courses.html       # list of courses this semester
│   ├── schedule.html      # weekly schedule (table)
│   ├── hobbies.html       # hobbies (videogames, exercise)
│   ├── yachay.html        # about Yachay Tech
│   └── contact.html       # contact form
└── images/                # photos and images used across the pages
```

## Semantic elements covered

- Page structure: `header`, `nav`, `main`, `section`, `article`
- Media: `figure` + `figcaption`
- Table: `table`, `caption`, `thead`, `tbody`, `tr`, `th`, `td` (including `rowspan`)
- Form: `form`, `label`, `input` (text, email, date, checkbox, submit), `select` + `option`, `textarea`

## Viewing it locally

This site is served through the shared Docker + nginx setup described in the repository's root
`CLAUDE.md`:

1. Add `127.0.0.1 workshop1.webapp` to `/etc/hosts`.
2. From `Desarrollo/`, run `docker compose up -d --force-recreate`.
3. Open `http://workshop1.webapp` in the browser.

Author: Felipe Quilumbango
