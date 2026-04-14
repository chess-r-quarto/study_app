# Study App Portal

**[Public Access](https://chess-r-quarto.github.io/study_app/)**

A minimalist, lichess like dark-themed gateway for accessing specialized study modules. Designed for focus and rapid access, leveraging React and TypeScript via Babel standalone.

## Visual Identity

* **Theme:** macOS Dark Mode aesthetic (`#1C1C1E` background, `#F3F4F6` text).
* **Typography:** System UI stack (`-apple-system`, `SF Pro Display`, `Noto Sans JP`) for maximum legibility.
* **Layout:** Responsive grid system featuring rounded windows, traffic light controls, and Lucide icons.
* **Interaction:** Tactile hover states (`transform: translateY`) with distinct accent colors for module categorization.

## Module Categories

### 🛠️ Development & Utilities
Analytical tools, parsers, and data extraction utilities.
* HTML to MD (`tools/html_to_md.html`)
* JSON Downloader (`tools/json_downloader.html`)
* PDF to MD (`tools/pdf_to_md.html`)
* Thread Scraper (`tools/thread_scraper.html`)
* Legal Compiler (`tools/legal_compiler.html`)
* Legal Compiler TS (`tools/legal_compiler_ts.html`)
* Vocal Remover (`vocal_remover_ui.html` and `app.py`)

### 📊 Data Science & Management
Core data structuring and management principles.
* Data Management (`data_management/data_management.html`)
* News Feed (`news_feed/news_feed.html`)

### 🏛️ Financial Planning (FP1)
Specialized financial planning calculators and tax matrices.
* FP1 Dividend Calc (`fp1/fp1_dividend_calc.html`)
* FP1 Corporate Tax (`fp1/fp1_cor_tax_matrix.html`)
* FP1 FAR (`fp1/fp1_far.html`)
* FP1 Pension (`fp1/fp1_pension.html`)
* FP1 Portfolio (`fp1/fp1_portfolio.html`)
* FP1 Asset Value (`fp1/fp1_asset_value.html`)
* FP1 Sell Buy (`fp1/fp1_sell_buy.html`)
* FP1 Inheritance (`fp1/fp1_souzoku.html`)
* FP1 Analysis (`fp1/analysis.html`)
* FP1 Static (`fp1/static.html`)

### 🔤 Language
Vocabulary drills, grammar rules, and syntax parsing.
* English Word (`english_word/dist/index.html`)
* English Flashcard (`english_card/english_card.html`)
* English Quiz (`english_card/english_quiz.html`)
* Grammar Basic (`english_card/grammar.html`)
* Grammar (High School) (`english_card/grammar_high_school.html`)
* Grammar Structure (`english_card/grammar_structure.html`)
* Syntax as Code (`english_card/syntax_as_code.html`)
* Syntax Parser (`english_card/syntax_parser.html`)

## Deployment

Mostly zero-dependency architecture.
* The frontend can be served via any static file server (e.g., GitHub Pages, Vercel, or local `python -m http.server`). All TypeScript/React compilation is handled in-browser.
* **Note:** The `Vocal Remover` tool requires running the local Flask backend server (`python app.py`) with its dependencies to process audio separation.
