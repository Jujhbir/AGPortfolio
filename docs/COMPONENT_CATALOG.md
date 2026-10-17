# Component catalog

| Component | HTML / CSS | Purpose and editing notes |
|---|---|---|
| Artboard | `.artboard` | Fixed 1512:982 design coordinate space; percentages and `cqw` sizes scale with width. |
| MacBook bezel and wallpaper | `.artboard__bezel`, `.artboard__wallpaper` | Black display frame, rounded screen edge and local wallpaper image. |
| Menu bar and notch | `.menu-bar`, `.menu-bar__notch` | Translucent top bar with centered black camera notch; owner name and clock are omitted. |
| Notes window and toolbar | `.notes-window`, `.page-surface`, `.notes-toolbar`, `.toolbar-icon` | App shell and decorative Notes toolbar. Toolbar images are sourced from Apple Support and are visual only. |
| Window controls | `.sidebar__controls`, `.window-dot--*` | Three source-matched red, yellow and green controls. |
| Search box | `.search-box`, `.search-box__icon` | Translucent, rounded search field filters page links using `js/app.js`; the centered magnifier is an Apple-hosted image. |
| Sidebar navigation | `.page-navigation`, `.page-link`, `.page-link__icon`, `.folder-item`, `.folder-icon`, `.folder-chevron` | Apple-hosted Notes and Finder-style folder images; the Apple disclosure image rotates with the Mock group’s open/closed state. Terms remains at the bottom. |
| Welcome page | `.welcome-page`, `.welcome-page__*` | Aligned heading, intro, lead image, explanatory text and image gallery. Local images are in `assets/`. |
| Terms page | `.terms-page`, `.terms-copy`, `.scrollbar-track` | Terms copy, inline section headings and visible simulated scrollbar. |
| Blank page | `.blank-page` | Empty Resources and Mock / Page 1 views. |
| Dock | `.dock`, `.dock__icon` | Translucent bar with eleven square Apple app-icon images. Icon URLs are hosted by Apple and require an internet connection. |
| Laptop base | `.laptop-base`, `.laptop-base__trackpad`, `.laptop-foot` | CSS lower case, trackpad inset and feet. |
| Heading and subtitle | `.content-heading`, `.content-subtitle` | Reusable title and short intro for added projects. |
| Left/right image and text | `.media-text-row`, `.media-text-row__image`, `.media-text-row__copy` | Reusable two-column image and text arrangement. Add `.media-text-row--image-right` and its documented CSS for right-image variant. |
| Image crop and radius options | `.media-image`, `.media-image--rounded*`, `.media-image--circle`, `.media-image--zoom-*`, `.media-image--focus-*` | Add to a figure to control corner radius, zoom and crop focus. See `ADDING_CONTENT.md` for examples. |
| Full-width image | `.full-width-image` | Local image and optional caption, scaled without distortion. |
| Image gallery | `.image-gallery`, `.image-gallery__item` | Image progression; four columns at desktop, two columns on mobile. |
| Project information | `.project-information`, `.project-information__meta` | Project title, metadata and description. |

See `ADDING_CONTENT.md` for copy-and-paste markup and page/navigation instructions. Example-only blocks are not rendered in any of the reference pages.
