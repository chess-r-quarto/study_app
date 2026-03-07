# Web Study Portal

**[Public Access](https://chess-r-quarto.github.io/Web_Study/)**

A minimalist, macOS dark-themed gateway for accessing specialized study modules. Designed for focus and rapid access, leveraging React and TypeScript via Babel standalone.

## Visual Identity

* **Theme:** macOS Dark Mode aesthetic (`#1C1C1E` background, `#F3F4F6` text).
* **Typography:** System UI stack (`-apple-system`, `SF Pro Display`, `Noto Sans JP`) for maximum legibility.
* **Layout:** Responsive grid system featuring rounded windows, traffic light controls, and Lucide icons.
* **Interaction:** Tactile hover states (`transform: translateY`) with distinct accent colors for module categorization.

## Module Categories

### 🛠️ Development & Utilities
Analytical tools, parsers, and data extraction utilities.
* HTML to MD (`html_to_md.html`)
* JSON Downloader (`json_downloader.html`)
* PDF to MD (`pdf_to_md.html`)
* Thread Scraper (`thread_scraper.html`)
* Legal Compiler (`legal_compiler.html`)
* Legal Compiler TS (`legal_compiler_ts.html`)

### 📊 Data Science & Management
Core data structuring and management principles.
* Data Management (`Data_Management.html`)

### 🏛️ Financial Planning (FP1)
Specialized financial planning calculators and tax matrices.
* FP1 Dividend Calc (`FP1_Dividend_Calc.html`)
* FP1 Corporate Tax (`FP1_cor_tax_matrix.html`)
* FP1 FAR (`FP1_FAR.html`)
* FP1 Pension (`FP1_Pension.html`)
* FP1 Portfolio (`FP1_Portfolio.html`)
* FP1 Asset Value (`FP1_asset_value.html`)
* FP1 Sell Buy (`FP1_sell_buy.html`)
* FP1 Inheritance (`FP1_souzoku.html`)

### 🔤 Language
Vocabulary drills and foundational knowledge.
* English Word (`English_Word.html`)

## Deployment

Zero-dependency architecture.
Simply serve the root directory via any static file server (e.g., GitHub Pages, Vercel, or local `python -m http.server`). All TypeScript/React compilation is handled in-browser.
