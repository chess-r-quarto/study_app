import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, Brain, BookMarked, MessageSquare, Puzzle, 
  Type, CheckSquare, Hash, Layers, Network, 
  Pencil, TerminalSquare, Search, Scissors, BookA
} from 'lucide-react';

import EnglishWord from './pages/EnglishWord';
import GrammarPuzzle from './pages/GrammarPuzzle';
import Placeholder from './pages/Placeholder';

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
      <nav className="flex-1 overflow-y-auto flex flex-col gap-1 px-3 py-4">
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
    <BrowserRouter>
      <div className="flex h-screen bg-[#161512] text-[#bababa] font-sans">
        <Sidebar />
        <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
          <Routes>
            <Route path="/" element={<EnglishWord />} />
            <Route path="/grammar-puzzle" element={<GrammarPuzzle />} />
            
            {/* Placeholders */}
            <Route path="/english-card" element={<Placeholder title="English Card" />} />
            <Route path="/english-quiz" element={<Placeholder title="English Quiz" />} />
            <Route path="/grammar" element={<Placeholder title="Grammar Basic" />} />
            <Route path="/grammar-high-school" element={<Placeholder title="Grammar (High School)" />} />
            <Route path="/grammar-structure" element={<Placeholder title="Grammar Structure" />} />
            <Route path="/grammar-term" element={<Placeholder title="Grammar Term" />} />
            <Route path="/grammar-verb" element={<Placeholder title="Grammar Verb" />} />
            <Route path="/grammar-train" element={<Placeholder title="Grammar Train" />} />
            <Route path="/modifiers" element={<Placeholder title="Modifiers" />} />
            <Route path="/countable-nouns" element={<Placeholder title="Countable Nouns" />} />
            <Route path="/no-m-sentence" element={<Placeholder title="No M Sentence" />} />
            <Route path="/no-m-puzzle" element={<Placeholder title="No M Puzzle" />} />
            <Route path="/syntax-as-code" element={<Placeholder title="Syntax as Code" />} />
            <Route path="/syntax-parser" element={<Placeholder title="Syntax Parser" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
