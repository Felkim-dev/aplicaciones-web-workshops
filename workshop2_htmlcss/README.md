# Workshop 2 — CSS Styling

Same site as Workshop 1, now styled with CSS. Covers the three ways to apply CSS (local/inline,
global/internal, linked/external), then builds a full visual identity on top: a custom color
palette, classes, Flexbox/Grid layouts, and a bit of polish inspired by *Elden Ring*'s
earthy/gothic look.

## Structure

```
my-site/
├── index.html                  # home page (About Me, Tech Stack, Interests, Social links)
├── pages/
│   ├── courses.html
│   ├── schedule.html
│   ├── hobbies.html
│   ├── yachay.html
│   └── contact.html
├── css/
│   ├── style.css                # shared/general rules: variables, body, header, nav, footer
│   ├── style-index.css          # page-specific rules for index.html
│   ├── style-courses.css        # page-specific rules for courses.html
│   ├── style-schedule.css       # page-specific rules for schedule.html
│   ├── style-hobbies.css        # page-specific rules for hobbies.html
│   ├── style-yachay.css         # page-specific rules for yachay.html
│   └── style-contact.css        # page-specific rules for contact.html
└── images/
```

Each page links `style.css` first, then its own `style-<page>.css` — general rules apply
everywhere, and each page's own file can override them where needed.

## CSS techniques covered

- Local (inline `style`), global (`<style>` in `<head>`), and linked (`<link rel="stylesheet">`) CSS
- CSS custom properties / variables (`:root`, `var()`) for a shared color palette
- Classes, `div`/`span`, descendant selectors, specificity, and `!important`
- Flexbox and CSS Grid layouts
- Pseudo-classes: `:hover`, `:focus`, `:nth-child(even/odd)`
- Attribute selectors (e.g. `input[type="submit"]`)
- External resources: Google Fonts (Cinzel) and Font Awesome icons
- Sticky footer (`min-height: 100vh` + `margin-top: auto`)

## Viewing it locally

Served through the same Docker + nginx setup as Workshop 1 (see the repository's root
`CLAUDE.md`):

1. Add `127.0.0.1 workshop2.webapp` to `/etc/hosts`.
2. From `Desarrollo/`, run `docker compose up -d --force-recreate`.
3. Open `http://workshop2.webapp` in the browser.

Author: Felipe Quilumbango
