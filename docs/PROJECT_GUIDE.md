# Portfolio project guide

## Overview

Static HTML, CSS, and vanilla JavaScript recreation of the supplied artboard exports. The desktop layout uses the original 1512 × 982 coordinate system and the artwork from the supplied `.fig` bundle. There is no build step, framework, or backend. Portfolio artwork uses local files; Apple toolbar and app-icon images load from Apple's CDN and therefore require an internet connection.

## Files

- `index.html` — artboard, MacBook mockup, sidebar navigation, Welcome and Terms pages, and blank page shells.
- `css/styles.css` — measured artboard geometry, colors, type sizes, reusable block styles, and responsive behavior.
- `js/app.js` — page selection, URL hash navigation, browser back/forward, and sidebar search.
- `assets/` — local images copied from the `.fig` archive. Apple toolbar and Dock icons are remote Apple-hosted images referenced in `index.html`.
- `docs/` — page map, component catalog, design tokens, and content editing instructions.
- `Reference Sources/` — read-only originals; do not write files here.

## Open the site

Open `index.html` in a modern browser. The app uses relative local paths. Sidebar links change pages and URLs; the search field filters the navigation labels.

## Source fidelity and open items

The user supplied four HTML screen exports with exact canvas dimensions, colors, fonts, measured element positions, radii, and page copy. The two screens marked “Example (do not code this page)” remain examples only. The generic content blocks are ready for later projects, while Resources and Mock / Page 1 remain blank as requested.

The user confirmed SF Pro / San Francisco as the intended interface font. CSS uses the SF Pro / Apple system stack first; Windows and other systems without SF Pro use their closest system UI font. The menu bar displays only the centered notch, with no name or clock. No font binaries were available to bundle.

No mobile or tablet artboard was included. `css/styles.css` adapts the page to a full-screen Notes-style interface at widths of 760 px and below; this is an implementation assumption. The browser rendering could not be opened through the available preview surface in the previous verification attempt, so a visual overlay comparison is outstanding.

## Add new content

Follow `ADDING_CONTENT.md` for headings, subtitles, left/right image rows, full-width images, galleries, project metadata, and new page navigation. Use [`PORTFOLIO_LANGUAGE.md`](PORTFOLIO_LANGUAGE.md) for the compact edit format and stable insertion anchors. Use [`ARTWORK_INTAKE_GEM.md`](ARTWORK_INTAKE_GEM.md) to set up an intake Gem that inventories finished work and image uploads, asks for missing block details, and prepares a complete coding prompt. Use exact local image filenames under `assets/`; keep the original artwork untouched.
