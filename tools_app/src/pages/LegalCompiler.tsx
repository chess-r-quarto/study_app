import React from 'react';
import { Gavel } from 'lucide-react';

export default function LegalCompiler() {
  return (
    <div className="flex flex-col h-full gap-6 items-center justify-center text-[#8c8c8c]">
      <Gavel size={64} className="mb-4" />
      <h2 className="text-2xl font-bold">Legal Compiler</h2>
      <p>Migration to tools_app in progress...</p>
    </div>
  );
}
