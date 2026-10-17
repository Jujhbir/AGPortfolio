# Simple portfolio edit format

Use this format to tell an LLM what to add or change. You do not need to paste the website code again when the portfolio workspace is available. Write only the details you know; normal sentences are fine. This is a request format for an LLM, not browser code.

You do **not** need to fill in every line. For a simple edit, name the page and say what to add in plain language; use the extra fields when placement, image choice, or styling needs to be specific.

## Start with this

```text
PAGE: [existing page name, or NEW - page name]
FOLDER: [Mock, another folder, or ROOT]
AFTER: [page or block to place this after; optional]
REFERENCE: [design page/frame number; optional]

HEADING: [heading]
SUBHEADING: [short intro; optional]
TEXT: [paragraph; optional]

ASSET hero: assets/exact-image-name.png

BLOCK: left image
  IMAGE: @hero
  HEADING: [image block heading]
  TEXT: [paragraph]
  CAPTION: [optional]
  LOOK: round corners, zoom 110%, focus left
```

The labels are prompts, not strict syntax. For example, “put the image on the left and round its corners” means the same as `BLOCK: left image` and `LOOK: round corners`.

## What to put in each line

- **PAGE** — say the existing page, such as `Resources` or `Mock / Page 1`, or say `NEW - [name]` to create one.
- **FOLDER** — where its sidebar link belongs. Use `ROOT` for no folder. It can be omitted for an existing page.
- **AFTER** — optional placement. Name a page or a block heading. If the name could refer to more than one place, the LLM should ask which one.
- **REFERENCE** — optional Figma/PDF page or frame to compare against. It is a reference number, not the website page.
- **HEADING, SUBHEADING, TEXT** — visible page content. `NOTE` can be used for instructions to the LLM; it must not appear on the website.
- **ASSET** — a reusable image pointer. Give it a short name once, then use `IMAGE: @hero`. The LLM saves the name on the image as `data-asset="hero"` in `index.html`; the pointer will still be there in later edits. To replace it, ask: `CHANGE ASSET hero TO assets/new-image.png`.
- **BLOCK** — a reusable layout. Choose `left image`, `right image`, `full image`, `gallery`, or `project info`. A block can include a heading, text, image, caption, or look instructions.
- **LOOK** — optional image treatment: rounded/square/circle corners, zoom 110/125/150%, or focus left/right/top/bottom. If omitted, keep the image natural and centered.

## Examples

### Add content to an existing page

```text
PAGE: Mock / Page 1
ADD: at the end
HEADING: Mountain Studies
SUBHEADING: Exploring light and scale.
ASSET hero: assets/mountain-landscape.png
BLOCK: left image
  IMAGE: @hero
  HEADING: First Study
  TEXT: Notes about this piece go here.
  LOOK: round corners, zoom 110%, focus left
```

### Make a new page in a folder

```text
PAGE: NEW - Page 2
FOLDER: Mock
AFTER: Page 1
HEADING: Mountain Studies
TEXT: A short introduction to this collection.
```

The LLM creates a unique page key from the name and checks it against the existing pages. You do not need to invent the key.

### Replace an image later

```text
PAGE: Mock / Page 1
CHANGE ASSET hero TO assets/mountain-landscape-new.png
```

The LLM finds images marked `data-asset="hero"` and updates their `src` to the new path. When it first adds an image pointer, the HTML will look like `<img src="assets/mountain-landscape.png" data-asset="hero" alt="...">`.

## Instructions for the LLM editing this project

1. Read this guide and inspect the current `index.html`, `css/styles.css`, `js/app.js`, and `assets/` before editing. The workspace is the source of truth; do not ask the user to paste files that are already available.
2. Find the requested page, folder, and insertion point. Use the stable markers below. Reuse the existing HTML classes and exact local assets. Do not edit `Reference Sources/`.
3. For a new page, add both its sidebar link and page view. The link's `href` and `data-page` and the view's `data-view` must use the same unique key. The existing JavaScript discovers matching pages automatically. Keep Terms of Service last in the sidebar.
4. Use an existing block from `ADDING_CONTENT.md`. Add CSS only if the request cannot be made with existing styles; put page-specific CSS inside the custom style markers.
5. If asked to edit the workspace, make the change there. If asked to return code, give only the added/replaced snippets, not whole files. Label every snippet with its filename and exact marker or element location. For a new page, show the separate navigation and page-view additions. Include any CSS addition only when needed.
6. If the requested location or asset is unclear after inspecting the project, ask a focused question before making that choice. Do not invent a replacement image.

## Exact insertion points in this project

| Requested change | Put it here |
|---|---|
| New root sidebar link | `index.html`, inside `<nav class="page-navigation">`, before `PORTFOLIO:NAV_ITEMS:END` |
| New child under Mock | `index.html`, between `PORTFOLIO:MOCK_ITEMS:START` and `PORTFOLIO:MOCK_ITEMS:END` |
| New page's content area | `index.html`, before `PORTFOLIO:PAGE_VIEWS:END` inside `#page-surface` |
| Add content to an existing page | `index.html`, between that page's `PORTFOLIO:CONTENT:<page-key>:START` and `...:END` comments |
| Add a required page-specific style | `css/styles.css`, between `PORTFOLIO:CUSTOM_PAGE_STYLES:START` and `...:END` |

For a new page view, include its own `PORTFOLIO:CONTENT:<new-key>:START/END` comments so later additions have an exact slot. To insert after a particular block, use its unique heading or HTML `id`. Existing Terms navigation is outside the root link marker and should remain last. See [`ADDING_CONTENT.md`](ADDING_CONTENT.md) for the exact HTML templates and available classes.
