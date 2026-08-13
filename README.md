# Study App Portal

**[Public Access](https://chess-r-quarto.github.io/study_app/navigator.html)**

A minimalist, Lichess-inspired dark-themed gateway for accessing specialized study modules. Designed for focus and rapid access, leveraging React and TypeScript via Babel standalone.

## 🚀 Recent Updates
- **Navigator Unification**: The root `index.html` has been renamed to `navigator.html` to better clarify its role as the central dashboard.
- **Tools Hub Migration**: Standalone developer tools have been migrated into a unified Vite/React application (`tools_app`), significantly improving maintainability.
- **Mobile-Optimized UI**: The launcher layout has been upgraded from a sidebar to a responsive Top Navigation Tab Bar.
- **Product-Level Manuals**: Every single application (39+ apps) now includes a comprehensive, high-quality Quarto-rendered HTML manual.

## 🎨 Visual Identity

* **Theme:** macOS Dark Mode aesthetic (`#1e1e1e` background, `#e0e0e0` text).
* **Typography:** System UI stack (`-apple-system`, `SF Pro Display`, `Noto Sans JP`) for maximum legibility.
* **Layout:** Responsive grid system with mobile-friendly scrollable tabs and Lucide icons.
* **Interaction:** Tactile hover states (`transform: scale`) with distinct accent colors for module categorization.

## 📁 Module Categories

### 🛠️ Development & Utilities
Analytical tools, parsers, and data extraction utilities.
* Tools Hub (Vite) (`tools_app/dist/index.html`) - A unified Vite/React app consolidating HTML/PDF/Wiki to MD, JSON tools, and Legal Compiler.

### 📊 Data Science & Language
* English Hub (Vite) (`english_app/dist/index.html`) - A unified Vite/React app for English vocabulary, grammar, and syntax learning.

## ⚙️ Deployment

Mostly zero-dependency architecture.
* The frontend can be served via any static file server (e.g., GitHub Pages, Vercel, or local `python -m http.server`). All TypeScript/React compilation is handled in-browser.
