import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, Brain, BookMarked, MessageSquare, Puzzle, 
  Type, CheckSquare, Hash, Layers, Network, 
  Pencil, TerminalSquare, Scissors, BookA
} from 'lucide-react';

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

function Sidebar() {
  const location = useLocation();
  const links = [
    { path: '/', label: 'English Word App', icon: BookOpen },
    { path: '/grammar-puzzle', label: 'Grammar Puzzle', icon: Puzzle },
    { path: '/english-card', label: 'English Card', icon: BookMarked },
    { path: '/english-quiz', label: 'English Quiz', icon: Brain },
    { path: '/grammar', label: 'Grammar Basic', icon: BookA },
    { path: '/grammar-high-school', label: 'Grammar (High School)', icon: BookOpen },
    { path: '/grammar-structure', label: 'Grammar Structure', icon: Layers },
    { path: '/grammar-term', label: 'Grammar Term', icon: Type },
    { path: '/grammar-verb', label: 'Grammar Verb', icon: CheckSquare },
    { path: '/grammar-train', label: 'Grammar Train', icon: Pencil },
    { path: '/modifiers', label: 'Modifiers', icon: Scissors },
    { path: '/countable-nouns', label: 'Countable Nouns', icon: Hash },
    { path: '/no-m-sentence', label: 'No M Sentence', icon: MessageSquare },
    { path: '/no-m-puzzle', label: 'No M Puzzle', icon: Puzzle },
    { path: '/syntax-as-code', label: 'Syntax as Code', icon: TerminalSquare },
    { path: '/syntax-parser', label: 'Syntax Parser', icon: Network },
  ];

  return (
    <div className="w-64 bg-[#262421] h-screen flex flex-col border-r border-[#403d39] shrink-0">
      <div className="p-6 pb-2">
        <h1 className="text-xl font-bold text-white tracking-widest flex items-center gap-2">
          <BookOpen size={20} className="text-[#3692e7]" /> ENGLISH HUB
        </h1>
      </div>
      <nav className="flex-1 overflow-y-auto flex flex-col gap-1 px-3 py-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-sm font-medium ${
                isActive 
                  ? 'bg-[#3692e7]/20 text-[#3692e7]' 
                  : 'text-[#bababa] hover:bg-[#1c1b18] hover:text-white'
              }`}
            >
              <Icon size={16} className="shrink-0" />
              <span className="truncate">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="flex h-screen bg-[#161512] text-[#bababa] font-sans">
        <Sidebar />
        <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
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
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
