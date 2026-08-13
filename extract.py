import re

html_path = '/Users/s/Document_Local/study_app/english_card/grammar_puzzle.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract script content
match = re.search(r'<script type="text/babel"[^>]*>(.*?)</script>', content, re.DOTALL)
if not match:
    print("Script tag not found")
    exit(1)

script_content = match.group(1)

# Remove React from window destructuring
script_content = re.sub(r"const {[^}]*} = React;", "", script_content)

# Add standard React import
script_content = "import React, { useState, useEffect, useRef } from 'react';\n" + script_content

# Remove ReactDOM createRoot/render since Vite handles it
# The exact pattern in grammar_puzzle is:
# const root = ReactDOM.createRoot(document.getElementById('root'));
# root.render(<App />);
script_content = re.sub(r"const root = ReactDOM\.createRoot\(document\.getElementById\('root'\)\);[\s\S]*root\.render\(<App />\);", "export default App;", script_content)
script_content = re.sub(r"const root = ReactDOM\.createRoot\(.*?\);[\s\S]*root\.render\(.*?\);", "export default App;", script_content)


with open('/Users/s/Document_Local/study_app/grammar_puzzle_ts/src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(script_content)

print("Extraction complete.")
