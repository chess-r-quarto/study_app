import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FileCode2, DownloadCloud, GitMerge, Gavel, FileText, BookOpen } from 'lucide-react';

import HtmlToMd from './pages/HtmlToMd';
import PdfToMd from './pages/PdfToMd';
import WikiToMd from './pages/WikiToMd';
import JsonDownloader from './pages/JsonDownloader';
import JsonMerger from './pages/JsonMerger';
import LegalCompiler from './pages/LegalCompiler';

function Sidebar() {
  const location = useLocation();
  const links = [
    { path: '/', label: 'HTML to MD', icon: FileCode2 },
    { path: '/pdf', label: 'PDF to MD', icon: FileText },
    { path: '/wiki', label: 'Wiki to MD', icon: BookOpen },
    { path: '/json-dl', label: 'JSON Downloader', icon: DownloadCloud },
    { path: '/json-merge', label: 'JSON Merger', icon: GitMerge },
    { path: '/legal', label: 'Legal Compiler', icon: Gavel },
  ];

  return (
    <div className="w-64 bg-[#262421] h-screen flex flex-col border-r border-[#403d39] shrink-0">
      <div className="p-6">
        <h1 className="text-xl font-bold text-white tracking-widest">TOOLS HUB</h1>
      </div>
      <nav className="flex-1 flex flex-col gap-2 px-4">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors font-medium ${
                isActive 
                  ? 'bg-[#3692e7]/20 text-[#3692e7]' 
                  : 'text-[#bababa] hover:bg-[#1c1b18] hover:text-white'
              }`}
            >
              <Icon size={18} />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-[#161512] text-[#bababa] font-sans">
        <Sidebar />
        <main className="flex-1 overflow-auto p-8">
          <Routes>
            <Route path="/" element={<HtmlToMd />} />
            <Route path="/pdf" element={<PdfToMd />} />
            <Route path="/wiki" element={<WikiToMd />} />
            <Route path="/json-dl" element={<JsonDownloader />} />
            <Route path="/json-merge" element={<JsonMerger />} />
            <Route path="/legal" element={<LegalCompiler />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
