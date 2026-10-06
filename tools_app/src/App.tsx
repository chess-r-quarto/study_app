import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import HtmlToMd from './pages/HtmlToMd';
import PdfToMd from './pages/PdfToMd';
import WikiToMd from './pages/WikiToMd';
import JsonDownloader from './pages/JsonDownloader';
import JsonMerger from './pages/JsonMerger';
import LegalCompiler from './pages/LegalCompiler';
import YouTubeToNotebook from './pages/YouTubeToNotebook';
import SustainEvaluator from './pages/SustainEvaluator';
import LocalPmFramework from './pages/LocalPmFramework';

function App() {
  return (
    <HashRouter>
      <div className="h-screen w-screen bg-[#161512] text-[#bababa] font-sans overflow-auto">
        <Routes>
          <Route path="/" element={<HtmlToMd />} />
          <Route path="/pdf" element={<PdfToMd />} />
          <Route path="/wiki" element={<WikiToMd />} />
          <Route path="/json-dl" element={<JsonDownloader />} />
          <Route path="/json-merge" element={<JsonMerger />} />
          <Route path="/legal" element={<LegalCompiler />} />
          <Route path="/youtube" element={<YouTubeToNotebook />} />
          <Route path="/sustain" element={<SustainEvaluator />} />
          <Route path="/pm" element={<LocalPmFramework />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
