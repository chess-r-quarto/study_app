import React, { useState, useEffect, useCallback } from 'react';
import { DownloadCloud, CheckCircle, AlertCircle } from 'lucide-react';

export default function JsonDownloader() {
  const [jsonText, setJsonText] = useState("");
  const [fileName, setFileName] = useState("data.json");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Validate JSON on every text change
  useEffect(() => {
    const trimmed = jsonText.trim();
    if (!trimmed) {
      setIsValid(true);
      setError(null);
      return;
    }
    try {
      JSON.parse(trimmed);
      setIsValid(true);
      setError(null);
    } catch (e: any) {
      setIsValid(false);
      setError(e.message);
    }
  }, [jsonText]);

  // Handle file generation and download
  const handleDownload = useCallback(() => {
    if (!isValid || !jsonText.trim()) return;

    const blob = new Blob([jsonText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    const finalName = fileName.toLowerCase().endsWith('.json') 
      ? fileName 
      : `${fileName}.json`;
    
    a.href = url;
    a.download = finalName;
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
  }, [jsonText, fileName, isValid]);

  return (
    <div className="flex flex-col h-full gap-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold uppercase tracking-widest text-[#dbd9d6] flex items-center gap-3">
          <DownloadCloud size={24} className="text-[#3692e7]" /> JSON Downloader
        </h1>
        <div className="text-[10px] uppercase tracking-widest text-[#707070] font-bold border border-[#3c3934] px-3 py-1 rounded">
          Local Environment Only
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row bg-[#262421] border border-[#3c3934] rounded-lg overflow-hidden shadow-lg min-h-0">
        
        {/* Control Sidebar */}
        <aside className="w-full lg:w-80 p-6 bg-[#211f1c] flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-[#3c3934] overflow-y-auto">
          <div>
            <label className="block text-[11px] font-bold text-[#707070] uppercase mb-2 tracking-wider">Output Name</label>
            <input 
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="w-full p-2.5 bg-[#161512] border border-[#3c3934] text-[#bababa] focus:border-[#3692e7] focus:outline-none text-sm rounded-sm font-mono"
              placeholder="filename.json"
            />
          </div>

          <div className="flex-grow">
            <label className="block text-[11px] font-bold text-[#707070] uppercase mb-2 tracking-wider">Validation</label>
            <div className={`p-4 rounded-sm text-xs border ${isValid ? 'border-green-900/30 bg-green-950/10 text-green-400' : 'border-red-900/30 bg-red-950/10 text-red-400'}`}>
              {isValid ? (
                <div className="flex items-center gap-2 font-bold">
                  <CheckCircle size={14} /> JSON is valid
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 font-bold">
                    <AlertCircle size={14} /> Invalid format
                  </div>
                  <div className="opacity-70 font-mono text-[10px] break-all">{error}</div>
                </div>
              )}
            </div>
          </div>

          <button 
            onClick={handleDownload}
            disabled={!isValid || !jsonText.trim()}
            className="w-full py-4 bg-[#3692e7] hover:bg-[#4da0eb] disabled:bg-[#3c3934] disabled:text-[#666] disabled:cursor-not-allowed text-white font-bold rounded-sm text-sm uppercase tracking-wide transition-colors"
          >
            Download JSON
          </button>
        </aside>

        {/* Editor Main */}
        <section className="flex-1 p-4 md:p-6 bg-[#161512] flex flex-col min-h-0">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[11px] font-bold text-[#707070] uppercase tracking-wider">Paste Text Below</span>
            <span className="text-[10px] text-[#444] font-mono tracking-tighter">PLAINTEXT / JSON</span>
          </div>
          <textarea 
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            spellCheck={false}
            placeholder='{ "status": "ok", "message": "paste here" }'
            className="flex-1 w-full p-4 bg-[#161512] border border-[#3c3934] focus:border-[#3692e7] focus:outline-none text-[#bababa] text-sm leading-relaxed resize-none rounded-sm font-mono"
          />
        </section>
      </main>
    </div>
  );
}
