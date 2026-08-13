import React, { useState } from 'react';
import TurndownService from 'turndown';
import { Download, RefreshCw, FileText } from 'lucide-react';

export default function WikiToMd() {
  const [wikiText, setWikiText] = useState('');
  const [markdown, setMarkdown] = useState('');

  const handleConvert = () => {
    // simplified parser for wikipedia HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(wikiText, 'text/html');
    
    // remove some noisy elements
    const removeSelectors = ['.mw-editsection', '.reference', '.navbox', '.infobox', '.metadata', '.noprint'];
    removeSelectors.forEach(sel => {
      doc.querySelectorAll(sel).forEach(el => el.remove());
    });

    const turndownService = new TurndownService({ headingStyle: 'atx' });
    const md = turndownService.turndown(doc.body);
    setMarkdown(md);
  };

  const handleDownload = () => {
    if (!markdown) return;
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `wiki_content.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full gap-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold uppercase tracking-widest text-[#dbd9d6] flex items-center gap-3">
          <FileText size={24} className="text-[#3692e7]" /> Wiki to Markdown
        </h1>
      </header>

      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 min-h-0">
        <section className="flex flex-col gap-4">
          <textarea
            className="flex-1 w-full bg-[#262421] border border-[#403d39] text-[#dbd9d6] p-4 rounded-md focus:outline-none focus:border-[#3692e7] font-mono text-sm resize-none"
            placeholder="Paste Wikipedia HTML content here..."
            value={wikiText}
            onChange={(e) => setWikiText(e.target.value)}
          ></textarea>
          <button 
            onClick={handleConvert}
            disabled={!wikiText}
            className="bg-[#3692e7] hover:bg-[#4a9ff0] disabled:bg-[#403d39] disabled:text-[#8c8c8c] text-white font-bold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw size={18} />
            CONVERT
          </button>
        </section>

        <section className="flex flex-col bg-[#262421] border border-[#403d39] rounded-md overflow-hidden shadow-lg">
          <div className="flex items-center justify-between p-3 border-b border-[#403d39] bg-[#161512]/50">
            <h2 className="text-sm font-semibold text-[#8c8c8c] uppercase tracking-wider">Markdown Output</h2>
            <button 
              onClick={handleDownload}
              disabled={!markdown}
              className="bg-[#81b64c] hover:bg-[#95c560] disabled:bg-[#403d39] disabled:text-[#8c8c8c] disabled:cursor-not-allowed text-white text-xs font-bold py-1.5 px-4 rounded transition-colors shadow-sm flex items-center gap-1.5"
            >
              <Download size={14} /> Download
            </button>
          </div>
          <textarea 
            className="flex-1 w-full bg-transparent text-[#dbd9d6] p-4 resize-none focus:outline-none font-mono text-sm leading-relaxed"
            value={markdown}
            readOnly
            placeholder="Result..."
          ></textarea>
        </section>
      </main>
    </div>
  );
}
