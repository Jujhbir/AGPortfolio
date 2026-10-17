# Adding and editing portfolio content

This guide uses the reusable blocks in `index.html` and `css/styles.css`. The Welcome and Terms pages follow the supplied artboard structure, with the Welcome content arranged into a padded, responsive reading layout. Add new project content to Resources or Mock / Page 1, which are intentionally blank.

For a short prompt syntax that names the page, folder, asset pointer, block, and exact insertion location, see [`PORTFOLIO_LANGUAGE.md`](PORTFOLIO_LANGUAGE.md). Its persistent HTML/CSS markers are the recommended insertion points for future edits.

## Files to edit

- `index.html` — page content, sidebar labels and image paths.
- `css/styles.css` — shared tokens, block styles and responsive layout.
- `js/app.js` — page switching and search. Only edit this when adding a new page key or changing navigation behavior.
- `assets/` — local art files. Do not add anything to `Reference Sources/`.

Every page view is a `.page-view` element inside `.page-surface`. The page key in `data-view`, the navigation link’s `data-page`, and its `href` hash must match. Existing keys are `welcome`, `resources`, `mock-page-1`, and `terms`.

## Heading and subtitle block

**Use for:** a title followed by a short subtitle or introductory line.

```html
<header class="content-heading">
  <h1>PROJECT TITLE</h1>
  <p class="content-subtitle">SHORT SUBTITLE OR INTRODUCTION</p>
</header>
```

- **Classes:** `.content-heading`, `.content-subtitle`.
- **Assets:** none required.
- **Editable content:** heading and subtitle text.
- **Responsive behavior:** type scales with the artboard on desktop; it wraps on mobile.
- **Files:** add the HTML in the chosen `.page-view`; change CSS only if a new reference requires different type or spacing.

## Left-image text block

**Use for:** an image at left with a subheading and paragraph at right.

```html
<section class="media-text-row">
  <figure class="media-text-row__image">
    <img src="assets/EXACT-ASSET-FILENAME.png" alt="DESCRIBE THE IMAGE">
    <figcaption>OPTIONAL CAPTION</figcaption>
  </figure>
  <div class="media-text-row__copy">
    <h2>SUBHEADING</h2>
    <p>BODY COPY.</p>
  </div>
</section>
```

- **Classes:** `.media-text-row`, `.media-text-row__image`, `.media-text-row__copy`.
- **Assets:** exact local asset in `assets/`; use the filename, not an external placeholder URL.
- **Editable content:** image path, alt text, optional caption, subheading and paragraph.
- **Responsive behavior:** two columns on desktop; image then copy on narrow screens.
- **Files:** add the HTML to the target page in `index.html`; edit the shared component rules in `css/styles.css` only when needed.

### Image appearance options

Add one or more of these classes to the image `<figure>` to specify the look without changing the shared component:

| Request | Class | Effect |
|---|---|---|
| Rounded corners | `media-image--rounded` | 14 px radius |
| Slightly rounded corners | `media-image--rounded-small` | 8 px radius |
| Extra rounded corners | `media-image--rounded-large` | 24 px radius |
| Circle crop | `media-image--circle` | Square frame clipped to a circle |
| Zoom in | `media-image--zoom-110`, `--zoom-125`, or `--zoom-150` | Scale image to 110%, 125%, or 150% |
| Shift crop left/right/up/down | `media-image--focus-left`, `--focus-right`, `--focus-top`, or `--focus-bottom` | Move the focal point within the image frame |

For example, a rounded image zoomed to 110% with the focal point shifted left:

```html
<figure class="media-text-row__image media-image media-image--rounded media-image--zoom-110 media-image--focus-left">
  <img src="assets/EXACT-ASSET-FILENAME.png" alt="DESCRIBE THE IMAGE">
  <figcaption>OPTIONAL CAPTION</figcaption>
</figure>
```

These options work on the image figure in left/right rows. For a full-width image or gallery item, add the same `media-image` and modifier classes to that figure. Zoom and focal point are most visible when the image is displayed in a fixed-height frame; set the figure height in `css/styles.css` when the design calls for a cropped frame. Do not create a new modifier when an existing one matches the requested look.

## Right-image text block

Use the same `.media-text-row` HTML as above and add `media-text-row--image-right` to the section:

```css
.media-text-row--image-right .media-text-row__image { order: 2; }
.media-text-row--image-right .media-text-row__copy { order: 1; }
@media (max-width: 760px) {
  .media-text-row--image-right .media-text-row__image,
  .media-text-row--image-right .media-text-row__copy { order: initial; }
}
```

- **Classes:** the left-image block classes plus `.media-text-row--image-right`; this variant is already styled in `css/styles.css`.
- **Assets and editable content:** same as the left-image block.
- **Responsive behavior:** image on the right on desktop; image then copy stacked on mobile.
- **Files:** `index.html` and `css/styles.css`.

## Full-width image block

**Use for:** one image spanning the available content width.

```html
<figure class="full-width-image">
  <img src="assets/EXACT-ASSET-FILENAME.png" alt="DESCRIBE THE ARTWORK">
  <figcaption>OPTIONAL CAPTION</figcaption>
</figure>
```

- **Classes:** `.full-width-image`.
- **Assets:** exact local file in `assets/`.
- **Editable content:** path, alt text and caption.
- **Responsive behavior:** image scales to container width and keeps its natural aspect ratio.
- **Files:** `index.html`; shared rules are in `css/styles.css`.

## Image progression / gallery block

**Use for:** a row or grid of related images.

```html
<section class="image-gallery" aria-label="PROJECT IMAGE PROGRESSION">
  <figure class="image-gallery__item">
    <img src="assets/IMAGE-01.png" alt="FIRST IMAGE DESCRIPTION">
    <figcaption>OPTIONAL CAPTION</figcaption>
  </figure>
  <figure class="image-gallery__item">
    <img src="assets/IMAGE-02.png" alt="SECOND IMAGE DESCRIPTION">
    <figcaption>OPTIONAL CAPTION</figcaption>
  </figure>
</section>
```

- **Classes:** `.image-gallery`, `.image-gallery__item`.
- **Assets:** one exact local file per figure.
- **Editable content:** section label, image paths, alt text, captions; duplicate or remove figures to change count.
- **Responsive behavior:** four columns on desktop and two columns under 760 px; images retain their natural proportions.
- **Files:** `index.html`; shared rules are in `css/styles.css`.

## Project information block

**Use for:** a title, optional date/medium/role metadata and project description.

```html
<section class="project-information">
  <h2>PROJECT TITLE</h2>
  <p class="project-information__meta">DATE · MEDIUM · ROLE</p>
  <p>PROJECT DESCRIPTION.</p>
</section>
```

- **Classes:** `.project-information`, `.project-information__meta`.
- **Assets:** none required.
- **Editable content:** title, metadata and description.
- **Responsive behavior:** text wraps with the page content.
- **Files:** `index.html`; shared rules are in `css/styles.css`.

## Add a page and navigation item

1. Add a matching link inside `<nav class="page-navigation">`:

   ```html
   <a class="page-link" href="#new-project" data-page="new-project">
     <span>NEW PROJECT</span>
   </a>
   ```

2. Add a page view inside `.page-surface`:

   ```html
   <article class="page-view blank-page" data-view="new-project" hidden>
     <!-- Add reusable content blocks here. -->
   </article>
   ```

3. Keep `new-project` identical in the `href`, `data-page`, and `data-view` values. `js/app.js` discovers these entries automatically.

## Copy-and-paste instructions for another LLM

```text
Check the supplied design reference: [PAGE OR FRAME].

Add a heading block:
- Heading: [TEXT]
- Subtitle: [TEXT OR NONE]
- Position: [INSERTION POINT]
- Image treatment: [e.g. 14 px rounded corners, zoom 110%, focus shifted left / none]

Then add a [LEFT-IMAGE / RIGHT-IMAGE / FULL-WIDTH IMAGE / IMAGE PROGRESSION] block:
- Image: [EXACT ASSET FILENAME]
- Alt text: [DESCRIPTION]
- Caption: [TEXT OR NONE]
- Position: [INSERTION POINT]

Use the existing components and match the reference.
Preserve colours, opacity, typography, spacing, borders, radii and image crops.
Do not modify unrelated content or the read-only Reference Sources folder.
```
