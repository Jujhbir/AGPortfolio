# Page map

The site reproduces the supplied 1512 × 982 Welcome and Terms screens inside a MacBook mockup. The two HTML exports labeled “Example (do not code this page)” are not implemented as content pages. Their generic image/text/gallery layouts are documented as reusable authoring blocks only.

| Page key | Sidebar label | Page contents | Navigation |
|---|---|---|---|
| `welcome` | Welcome | Welcome heading and text; landscape and two supplied thumbnail images | `#welcome` |
| `resources` | Resources | Intentionally blank | `#resources` |
| `mock-page-1` | Mock → Page 1 | Intentionally blank | `#mock-page-1` |
| `terms` | Terms Of Service | Terms copy from supplied screen | `#terms` |

Terms Of Service is kept as the last sidebar item as requested. Each navigation link uses `data-page`; its matching `.page-view` uses the same `data-view`. The page state is updated by `js/app.js` and reflected in the URL hash.

Stable edit anchors are in `index.html`: `PORTFOLIO:NAV_ITEMS` for root navigation, `PORTFOLIO:MOCK_ITEMS` for Mock children, `PORTFOLIO:PAGE_VIEWS` for page shells, and `PORTFOLIO:CONTENT:<page-key>` for each page's content. See [`PORTFOLIO_LANGUAGE.md`](PORTFOLIO_LANGUAGE.md) for the prompt format and exact insertion rules.
