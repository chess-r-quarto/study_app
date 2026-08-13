import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import EnglishWord from './pages/EnglishWord';
import GrammarPuzzle from './pages/GrammarPuzzle';
import CountableNouns from './pages/CountableNouns';
import EnglishCard from './pages/EnglishCard';
import EnglishQuiz from './pages/EnglishQuiz';
import Grammar from './pages/Grammar';
import GrammarHighSchool from './pages/GrammarHighSchool';
import GrammarStructure from './pages/GrammarStructure';
import GrammarTerm from './pages/GrammarTerm';
import GrammarTrain from './pages/GrammarTrain';
import GrammarVerb from './pages/GrammarVerb';
import Modifiers from './pages/Modifiers';
import NoMPuzzle from './pages/NoMPuzzle';
import NoMSentence from './pages/NoMSentence';
import SyntaxAsCode from './pages/SyntaxAsCode';
import SyntaxParser from './pages/SyntaxParser';

function App() {
  return (
    <HashRouter>
      <div className="h-screen w-screen bg-[#161512] text-[#bababa] font-sans overflow-auto">
        <Routes>
          <Route path="/" element={<EnglishWord />} />
          <Route path="/grammar-puzzle" element={<GrammarPuzzle />} />
          <Route path="/english-card" element={<EnglishCard />} />
          <Route path="/english-quiz" element={<EnglishQuiz />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/grammar-high-school" element={<GrammarHighSchool />} />
          <Route path="/grammar-structure" element={<GrammarStructure />} />
          <Route path="/grammar-term" element={<GrammarTerm />} />
          <Route path="/grammar-verb" element={<GrammarVerb />} />
          <Route path="/grammar-train" element={<GrammarTrain />} />
          <Route path="/modifiers" element={<Modifiers />} />
          <Route path="/countable-nouns" element={<CountableNouns />} />
          <Route path="/no-m-sentence" element={<NoMSentence />} />
          <Route path="/no-m-puzzle" element={<NoMPuzzle />} />
          <Route path="/syntax-as-code" element={<SyntaxAsCode />} />
          <Route path="/syntax-parser" element={<SyntaxParser />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
