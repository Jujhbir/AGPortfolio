# Design tokens and source measurements

## Primary reference

The four supplied HTML exports describe a 1512 × 982 artboard. `css/styles.css` keeps the source canvas aspect ratio and converts the coordinates to percentages / container-width font units, so the desktop composition scales as one whole frame. The first export is the Welcome state; the second is Terms of Service. The two later exports are marked “Example (do not code this page)” and are reference examples only.

## Shared tokens

| Token / detail | Value | Use |
|---|---:|---|
| Artboard | 1512 × 982 | Pasted frame coordinate system |
| Artboard background | `linear-gradient(152deg, #EFEFEF 0%, #A7A7A7 100%)` | Outer canvas |
| Outer bezel | x 95.02, y 46.46, 1320.83 × 872.90; 27 px top radius | MacBook display frame |
| Screen image | x 113.18, y 63.55, 1285.65 × 812.46; 20 px top radius | Wallpaper crop |
| Main window | x 187.13, y 117.05, 1145.78 × 664.94; 20 px radius | Notes-style app |
| Sidebar | 212.14 px wide; `rgba(245,245,247,.76)` | Translucent Notes navigation |
| Main page surface | `#F5F5F7` | Welcome and Terms background |
| MacBook notch | x 676.81, y 62.96, 169.32 × 24.13; black | Top screen edge |
| Notes UI text | 12 px, SF Pro / system UI stack | Sidebar labels |
| Page heading | About 23 px at 1512 px artboard width, SF Pro / system UI stack | Welcome / Terms heading |
| Body text | About 14 px at 1512 px artboard width, SF Pro / system UI stack | Welcome and Terms copy |
| Dock | x 460.84, y 799.83, 579.31 × 57.34 | Eleven translucent icon wells |
| Laptop base | x 53.52, y 917.36, 1405.89 × 45.05 | Lower case, trackpad and feet |

The user confirmed SF Pro / San Francisco as the intended interface font. CSS requests the Apple system font stack first, including `-apple-system`, `BlinkMacSystemFont`, `SF Pro Display` and `SF Pro Text`; on systems without SF Pro it falls back to the platform UI font. The menu bar intentionally has no owner name or time display.

The full-screen background uses the same light-to-gray gradient across the viewport. A restrained directional shadow sits under the Notes window and a still lighter shadow sits beneath the Dock; the MacBook bezel and base, selected sidebar row, and search field have no shadows. The menu bar, sidebar, search field, and Dock use translucent materials. Apple-hosted raster images supply the Notes toolbar, search control, Dock artwork, and sidebar symbols; those images need an internet connection.

## Local image assets

| Asset | Dimensions | Current use |
|---|---:|---|
| `assets/desktop-wallpaper.png` | 4096 × 2304 | Screen wallpaper |
| `assets/mountain-landscape.png` | 474 × 296 | Welcome large image |
| `assets/notes-app-wide-thumbnail.png` | 340 × 211 | Welcome right tile 1 |
| `assets/notes-app-detail-thumbnail.png` | 363 × 225 | Welcome right tile 2 |
| `assets/notes-app-wide.png` | 2904 × 1800 | Full-resolution image for future content |
| `assets/notes-app-detail.png` | 1360 × 841 | Full-resolution image for future content |
| `assets/wallpaper-thumbnail.png` | 512 × 288 | Future wallpaper tile |

These are local copies of the artwork embedded in the supplied `.fig`; `Reference Sources/` remains read-only. Placeholder `placehold.co` URLs in the pasted markup have been replaced with these local assets.

## Responsive assumption

No mobile or tablet artboard was supplied. At widths up to 760 px the physical computer frame is hidden and the Notes-inspired app becomes a full-screen, reflowed layout, keeping text readable and preventing horizontal overflow. This is an adaptation, not a pixel-matched mobile reference. The selected page, text, image sequence and sidebar labels remain the same.
