# Tools App (Vite + React 19 + TypeScript + Tailwind CSS)

A unified modular toolkit consolidating developer, analytical, policy, and project management tools in a high-performance single-page application.

## 🛠️ Included Tools & Modules

| Route | Tool Name | Description |
| :--- | :--- | :--- |
| `#/` | **HTML to MD** | Convert HTML / MHTML documents into formatted Markdown and PDF |
| `#/pdf` | **PDF to MD** | Extract text and layout structures from PDF documents into Markdown |
| `#/wiki` | **Wiki to MD** | Wikipedia article fetcher and clean Markdown converter |
| `#/json-dl` | **JSON Downloader** | Parse, filter, and extract nested JSON hierarchies |
| `#/json-merge` | **JSON Merger** | Deduplicate, combine, and validate JSON structures |
| `#/legal` | **Legal Compiler** | Japanese legal text compiler, normalization & structure parser |
| `#/youtube` | **YouTube Formatter** | Clean raw extracted video URLs and reformat with newlines |
| `#/sustain` | **Sustain Strategy** | Sustainable strategy evaluation, 4P validation, causal loop & TLBMC |
| `#/pm` | **Local PM Framework** | Municipal project management framework aligned with PMBOK |

## 🚀 Development & Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type check & build production bundle
npm run build

# Preview build locally
npm run preview
```

## 📦 Deployment Architecture

The application is bundled into `dist/` with relative asset paths (`base: './'`), allowing direct hosting via GitHub Pages or any static file server without server-side dependencies.
