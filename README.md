# Study App Portal

**[Public Access](https://chess-r-quarto.github.io/study_app/)**

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
* JSON Downloader (Vite) (`json_download/index.html`)

### 📊 Data Science & Language
Core data structuring, news readers, and vocabulary platforms.
* Data Management (`data_management/data_management.html`)
* English Card (`english_card/english_card.html`)
* English Quiz (`english_card/english_quiz.html`)
* Grammar Basic (`english_card/grammar.html`)
* Grammar (High School) (`english_card/grammar_high_school.html`)
* Grammar Structure (`english_card/grammar_structure.html`)
* Syntax as Code (`english_card/syntax_as_code.html`)
* Syntax Parser (`english_card/syntax_parser.html`)
* Grammar Verb (`english_card/grammar_verb.html`)
* Grammar Term (`english_card/grammar_term.html`)
* Grammar Puzzle (`english_card/grammar_puzzle.html`)
* Grammar Puzzle TS (`grammar_puzzle_ts/dist/index.html`)
* Modifiers (`english_card/modifiers.html`)
* No M Sentence (`english_card/no_m_sentence.html`)
* No M Puzzle (`english_card/no_m_puzzle.html`)
* Countable Nouns (`english_card/countable_nouns.html`)
* English Word App (`english_card/english_word_app.html`)
* English Word App TS (`english_word_ts/dist/index.html`)
* Grammar Train (`english_card/grammar_train.html`)

### 🧮 Mathematics
Mathematical symbol quizzes and statistical tools.
* Mathchess (`math/math_quiz.html`)
* Stat Graecia (`math/stat_graecia.html`)

### 🏛️ Financial Planning (FP1)
Specialized financial planning calculators and tax matrices for the FP1 exam.
* Dividend Calc (`fp1/fp1_dividend_calc.html`)
* Corporate Tax Matrix (`fp1/fp1_cor_tax_matrix.html`)
* FP1 FAR (`fp1/fp1_far.html`)
* FP1 Pension (`fp1/fp1_pension.html`)
* FP1 Portfolio (`fp1/fp1_portfolio.html`)
* Asset Value (`fp1/fp1_asset_value.html`)
* Sell Buy Simulator (`fp1/fp1_sell_buy.html`)
* Inheritance Tax (`fp1/fp1_souzoku.html`)
* Small Scale Land Tax Relief (`fp1/fp1_small-scale-land-tax-relief.html`)
* Analysis Tools (`fp1/analysis.html`)
* Static Reference (`fp1/static.html`)

## ⚙️ Deployment

Mostly zero-dependency architecture.
* The frontend can be served via any static file server (e.g., GitHub Pages, Vercel, or local `python -m http.server`). All TypeScript/React compilation is handled in-browser.
