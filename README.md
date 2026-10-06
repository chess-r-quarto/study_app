# Study App Portal

**[Public Access](https://chess-r-quarto.github.io/study_app/navigator.html)**

A minimalist, Lichess-inspired dark-themed gateway for accessing specialized study modules. Designed for focus and rapid access, leveraging React and TypeScript via Babel standalone.

## 🚀 Recent Updates
- **Navigator Unification**: The root `index.html` has been renamed to `navigator.html` to better clarify its role as the central dashboard.
- **Tools Hub Migration & Expansion**: All prototype tools (HTML/PDF/Wiki to MD, JSON tools, Legal Compiler, YouTube URL Formatter, Sustainable Strategy Evaluator, Local PM Framework) have been fully migrated into a modularized Vite/React/TypeScript architecture (`tools_app`).
- **Mobile-Optimized UI**: The launcher layout has been upgraded from a sidebar to a responsive Top Navigation Tab Bar.
- **Product-Level Manuals**: Every single application now includes dedicated documentation or structured schema management.

## 🎨 Visual Identity

* **Theme:** macOS & Lichess Dark Mode aesthetic (`#1e1e1e` / `#161512` background, `#e0e0e0` / `#dcd8d3` text).
* **Typography:** System UI stack (`-apple-system`, `SF Pro Display`, `Noto Sans JP`) for maximum legibility.
* **Layout:** Responsive grid system with mobile-friendly scrollable tabs and Lucide icons.
* **Interaction:** Tactile hover states (`transform: scale`) with distinct accent colors for module categorization.

## 📁 Module Categories

### 🛠️ Development & Utilities
Analytical tools, parsers, and data extraction utilities.
* **Tools Hub (Vite + React + TS)** (`tools_app/dist/index.html`) - A unified modular application consolidating:
  - **HTML to MD** (`#/`): HTML / MHTML to clean Markdown & PDF
  - **PDF to MD** (`#/pdf`): Extract text and structure from PDF documents
  - **Wiki to MD** (`#/wiki`): Wikipedia article converter
  - **JSON Downloader** (`#/json-dl`): Filter & download JSON structures
  - **JSON Merger** (`#/json-merge`): Merge and deduplicate JSON files
  - **Legal Compiler** (`#/legal`): Japanese legal text compiler & formatter
  - **YouTube Formatter** (`#/youtube`): Clean URL extractor and newline formatter
  - **Sustain Strategy** (`#/sustain`): 4P & Triple-Layered Business Model Canvas evaluator
  - **Local PM Framework** (`#/pm`): PMBOK-aligned local government project manager

### 📊 Data Science & Language
* English Hub (Vite) (`english_app/dist/index.html`) - A unified Vite/React app for English vocabulary, grammar, and syntax learning.

## ⚙️ Deployment

Mostly zero-dependency architecture.
* The frontend can be served via any static file server (e.g., GitHub Pages, Vercel, or local `python -m http.server`). All TypeScript/React compilation is handled in-browser.
