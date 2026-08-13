import React, { useState, useEffect, useRef } from 'react';

type MergeStrategy = 'array' | 'object' | 'wrap';

interface FileData {
  id: string;
  name: string;
  content: any;
}

const Button = ({
  onClick,
  children,
  variant = 'primary',
  className = '',
  disabled = false,
  title = ''
}: {
  onClick: (e?: React.MouseEvent) => void,
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'danger' | 'icon',
  className?: string,
  disabled?: boolean,
  title?: string
}) => {
  const baseStyle = "font-bold uppercase tracking-wider text-sm transition-colors focus:outline-none flex items-center justify-center gap-2 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<string, string> = {
    primary: "bg-[#629924] text-white hover:bg-[#77a73e] px-4 py-2 shadow-[0_2px_0_rgba(0,0,0,0.2)]",
    secondary: "bg-[#302e2c] text-[#bababa] hover:text-white hover:bg-[#3c3936] px-4 py-2 border border-[#403d39]",
    danger: "bg-[#c33] text-white hover:bg-[#d44] px-4 py-2 shadow-[0_2px_0_rgba(0,0,0,0.2)]",
    icon: "bg-transparent text-[#bababa] hover:text-white p-2 hover:bg-[#403d39] rounded-none"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default function JsonMerger() {
  const [filesData, setFilesData] = useState<FileData[]>([]);
  const [mergeStrategy, setMergeStrategy] = useState<MergeStrategy>('array');
  const [mergedJson, setMergedJson] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isDraggingFile, setIsDraggingFile] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      mergeFiles();
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [filesData, mergeStrategy]);

  const processFiles = async (files: File[]) => {
    setError(null);
    const newFilesData: FileData[] = [];
    for (const file of files) {
      try {
        const text = await file.text();
        const json = JSON.parse(text);
        newFilesData.push({
          id: Math.random().toString(36).substring(7),
          name: file.name,
          content: json,
        });
      } catch (err) {
        setError(`Failed to parse "${file.name}". Please ensure it's a valid JSON file.`);
        return;
      }
    }
    setFilesData(prev => [...prev, ...newFilesData]);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      processFiles(Array.from(event.target.files));
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleFileDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingFile(true);
  };

  const handleFileDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingFile(false);
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingFile(false);
    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files).filter(
        f => f.name.endsWith('.json') || f.type === 'application/json'
      );
      if (files.length > 0) processFiles(files);
      else setError("Only JSON files are accepted.");
    }
  };

  const handleSortDragStart = (e: React.DragEvent<HTMLLIElement>, position: number) => {
    dragItem.current = position;
    e.currentTarget.classList.add('opacity-40');
  };

  const handleSortDragEnter = (_e: React.DragEvent<HTMLLIElement>, position: number) => {
    dragOverItem.current = position;
  };

  const handleSortDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
    e.currentTarget.classList.remove('opacity-40');
    if (dragItem.current !== null && dragOverItem.current !== null && dragItem.current !== dragOverItem.current) {
      const _filesData = [...filesData];
      const draggedItemContent = _filesData.splice(dragItem.current, 1)[0];
      _filesData.splice(dragOverItem.current, 0, draggedItemContent);
      setFilesData(_filesData);
    }
    dragItem.current = null;
    dragOverItem.current = null;
  };

  const moveFileUp = (index: number) => {
    if (index === 0) return;
    const newFiles = [...filesData];
    [newFiles[index - 1], newFiles[index]] = [newFiles[index], newFiles[index - 1]];
    setFilesData(newFiles);
  };

  const moveFileDown = (index: number) => {
    if (index === filesData.length - 1) return;
    const newFiles = [...filesData];
    [newFiles[index + 1], newFiles[index]] = [newFiles[index], newFiles[index + 1]];
    setFilesData(newFiles);
  };

  const sortFilesByName = (order: 'asc' | 'desc') => {
    setFilesData(prev => {
      const sorted = [...prev].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return order === 'asc' ? -1 : 1;
        if (nameA > nameB) return order === 'asc' ? 1 : -1;
        return 0;
      });
      return sorted;
    });
  };

  const removeFile = (id: string) => {
    setFilesData(prev => prev.filter(f => f.id !== id));
  };

  const mergeFiles = () => {
    if (filesData.length === 0) {
      setMergedJson('');
      return;
    }
    try {
      let result: any;
      switch (mergeStrategy) {
        case 'array':
          result = [];
          filesData.forEach(file => {
            if (Array.isArray(file.content)) result.push(...file.content);
            else result.push(file.content);
          });
          break;
        case 'object':
          result = {};
          filesData.forEach(file => {
            if (typeof file.content === 'object' && file.content !== null && !Array.isArray(file.content)) {
              result = { ...result, ...file.content };
            } else {
              result = { ...result, ...file.content };
            }
          });
          break;
        case 'wrap':
          result = filesData.map(f => f.content);
          break;
      }
      setMergedJson(JSON.stringify(result, null, 2));
    } catch (err) {
      setError("An unexpected error occurred during the merge process.");
    }
  };

  const downloadMergedJson = () => {
    if (!mergedJson) return;
    const blob = new Blob([mergedJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'merged.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-[1200px] w-full mx-auto p-4 md:p-6 flex flex-col h-full overflow-auto" style={{ background: '#161512', color: '#bababa' }}>

      <header className="mb-6 flex justify-between items-center pb-4 border-b border-[#403d39] flex-shrink-0">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="text-white">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
            <line x1="15" y1="3" x2="15" y2="21"></line>
          </svg>
          <h1 className="text-2xl font-bold text-white tracking-wide">JSON MERGER</h1>
        </div>
        <div className="text-[#bababa] text-sm hidden md:block">
          Browser-based utility
        </div>
      </header>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6 lg:pb-2 lg:min-h-0">

        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col gap-4 lg:h-full lg:overflow-hidden">

          <div
            className={`flex-shrink-0 border-2 border-dashed rounded-sm p-6 text-center transition-colors cursor-pointer ${
              isDraggingFile ? 'border-[#629924] bg-[#1f2618]' : 'border-[#403d39] bg-[#262421] hover:bg-[#302e2c]'
            }`}
            onDragOver={handleFileDragOver}
            onDragLeave={handleFileDragLeave}
            onDrop={handleFileDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              multiple
              accept=".json,application/json"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileSelect}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className="mx-auto text-[#bababa] mb-3">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2">Upload Files</h3>
            <p className="text-[#bababa] text-sm">Tap or drop JSON files here</p>
          </div>

          {error && (
            <div className="flex-shrink-0 bg-[#3a1a1a] border border-[#c33] p-3 rounded-sm flex items-start gap-3">
              <svg className="h-5 w-5 text-[#c33] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <p className="text-sm text-white">{error}</p>
            </div>
          )}

          <div className="flex-shrink-0 bg-[#262421] p-4 rounded-sm border border-[#403d39] shadow-md">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-b border-[#403d39] pb-2">Merge Strategy</h3>
            <div className="space-y-4">
              {[
                { value: 'array' as MergeStrategy, label: 'Flatten Array', desc: 'Extract array contents into a single flat array.' },
                { value: 'object' as MergeStrategy, label: 'Object Assign', desc: 'Merge properties. Later files overwrite existing keys.' },
                { value: 'wrap' as MergeStrategy, label: 'Wrap in Array', desc: 'Keep files intact as elements of a new array.' },
              ].map(opt => (
                <label key={opt.value} className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="strategy"
                    value={opt.value}
                    checked={mergeStrategy === opt.value}
                    onChange={() => setMergeStrategy(opt.value)}
                    className="mt-1 accent-[#629924]"
                  />
                  <div>
                    <div className="font-bold text-white text-sm group-hover:text-[#629924] transition-colors">{opt.label}</div>
                    <div className="text-xs text-[#bababa] mt-1">{opt.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {filesData.length > 0 && (
            <div className="flex flex-col bg-[#262421] p-4 rounded-sm border border-[#403d39] shadow-md max-h-[50vh] lg:max-h-none lg:min-h-0 lg:flex-1">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-3 border-b border-[#403d39] pb-2 flex-shrink-0">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest whitespace-nowrap">
                  Loaded Files ({filesData.length})
                </h3>
                <div className="flex items-center gap-2">
                  {filesData.length > 1 && (
                    <div className="flex items-center gap-1 border-r border-[#403d39] pr-2">
                      <Button variant="secondary" onClick={() => sortFilesByName('asc')} className="!text-[10px] !py-1 !px-2 uppercase" title="Sort A to Z">
                        A-Z ↓
                      </Button>
                      <Button variant="secondary" onClick={() => sortFilesByName('desc')} className="!text-[10px] !py-1 !px-2 uppercase" title="Sort Z to A">
                        Z-A ↑
                      </Button>
                    </div>
                  )}
                  <Button variant="secondary" onClick={() => setFilesData([])} className="!text-[10px] !py-1 !px-2 uppercase">
                    Clear All
                  </Button>
                </div>
              </div>

              <ul className="space-y-1 overflow-y-auto pr-1 flex-1 pb-1">
                {filesData.map((file, index) => (
                  <li
                    key={file.id}
                    draggable
                    onDragStart={(e) => handleSortDragStart(e, index)}
                    onDragEnter={(e) => handleSortDragEnter(e, index)}
                    onDragEnd={handleSortDragEnd}
                    onDragOver={(e) => e.preventDefault()}
                    className="flex justify-between items-center bg-[#302e2c] p-1 pl-3 border border-[#3e3b38] hover:border-[#504d49] transition-colors group cursor-grab active:cursor-grabbing"
                  >
                    <div className="flex items-center overflow-hidden flex-1">
                      <span className="text-sm font-medium text-white truncate font-mono" title={file.name}>
                        {file.name}
                      </span>
                    </div>

                    <div className="flex items-center ml-2 bg-[#161512] rounded-sm border border-[#403d39] overflow-hidden flex-shrink-0">
                      <button
                        onClick={(e) => { e.stopPropagation(); moveFileUp(index); }}
                        disabled={index === 0}
                        className="p-2 text-[#bababa] hover:text-white hover:bg-[#36322f] disabled:opacity-30 transition-colors"
                        title="Move Up"
                      >▲</button>
                      <div className="w-px h-6 bg-[#403d39]"></div>
                      <button
                        onClick={(e) => { e.stopPropagation(); moveFileDown(index); }}
                        disabled={index === filesData.length - 1}
                        className="p-2 text-[#bababa] hover:text-white hover:bg-[#36322f] disabled:opacity-30 transition-colors"
                        title="Move Down"
                      >▼</button>
                      <div className="w-px h-6 bg-[#403d39]"></div>
                      <button
                        onClick={(e) => { e.stopPropagation(); removeFile(file.id); }}
                        className="p-2 text-[#bababa] hover:text-[#c33] hover:bg-[#3a1a1a] transition-colors"
                        title="Remove"
                      >✕</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex flex-col h-[600px] lg:h-full overflow-hidden bg-[#262421] rounded-sm border border-[#403d39] shadow-md">
          <div className="p-3 border-b border-[#403d39] flex justify-between items-center bg-[#211f1c] flex-shrink-0">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest pl-2">Preview</h3>
            <Button
              onClick={downloadMergedJson}
              disabled={!mergedJson || filesData.length === 0}
              className="!py-1.5 !text-xs"
            >
              DOWNLOAD JSON
            </Button>
          </div>

          <div className="flex-1 p-0 overflow-hidden relative bg-[#1b1a18]">
            {filesData.length === 0 ? (
              <div className="absolute inset-0 flex items-center justify-center text-[#403d39] text-sm p-6 text-center font-mono">
                // Awaiting data...
              </div>
            ) : (
              <textarea
                readOnly
                value={mergedJson}
                className="w-full h-full p-4 font-mono text-sm bg-transparent text-[#93a1a1] resize-none focus:outline-none"
                spellCheck={false}
              />
            )}
          </div>
        </div>

      </main>
    </div>
  );
}
