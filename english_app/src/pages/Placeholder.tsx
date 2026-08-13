import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as lucide from 'lucide-react';
import { Settings } from 'lucide-react';

export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center p-8">
      <Settings size={48} className="text-[#3692e7] mb-6 animate-[spin_4s_linear_infinite]" />
      <h2 className="text-3xl font-bold text-white tracking-widest uppercase mb-4">
        {title}
      </h2>
      <p className="text-[#8c8c8c] max-w-md mx-auto text-lg leading-relaxed">
        This module is currently being migrated to the unified English Hub. 
        Please check back later or use the standalone HTML version in the prototype folder.
      </p>
    </div>
  );
}
