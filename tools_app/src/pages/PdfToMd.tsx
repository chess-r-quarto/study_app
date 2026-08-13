import React, { useState, useRef, DragEvent, ChangeEvent } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { UploadCloud, Copy, Download } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

const extractTextFromPdf = async (file: File): Promise<string> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let markdownOutput = `# ${file.name}\n\n`;

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      
      let lastY = -1;
      let pageText = '';

      for (const item of textContent.items) {
        if ('str' in item) {
          if (lastY !== -1 && Math.abs(lastY - item.transform[5]) > 5) {
            pageText += '\n';
          } else if (lastY !== -1) {
            pageText += ' ';
          }
          pageText += item.str;
          lastY = item.transform[5];
        }
      }

      markdownOutput += `## Page ${pageNum}\n\n${pageText}\n\n---\n\n`;
    }

    return markdownOutput;
  } catch (error) {
    console.error("PDF Extraction Error:", error);
    throw new Error("Failed to load PDF.");
  }
};

export default function PdfToMd() {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>('');
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const processFile = async (file: File) => {
    if (file.type !== 'application/pdf') {
      alert('Please select a PDF file.');
      return;
    }

    setIsProcessing(true);
    setFileName(file.name);
    setMarkdown('');

    try {
      const result = await extractTextFromPdf(file);
      setMarkdown(result);
    } catch (error) {
      setMarkdown(`An error occurred: ${(error as Error).message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      await processFile(file);
    }
  };

  const handleFileInput = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  const downloadMarkdown = () => {
    if (!markdown || !fileName) return;

    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    
    const baseName = fileName.replace(/\.[^/.]+$/, "");
    link.download = `${baseName}.md`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full gap-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold uppercase tracking-widest text-[#dbd9d6] flex items-center gap-3">
          <span className="text-[#81b64c]">♙</span> PDF to Markdown
        </h1>
        {fileName && (
          <div className="text-sm text-[#8c8c8c] bg-[#262421] px-3 py-1 rounded border border-[#403d39]">
            {fileName}
          </div>
        )}
      </header>

      <main className="flex-1 flex flex-col md:flex-row gap-6 min-h-0">
        <section className="flex-1 flex flex-col min-h-0">
          <div 
            className={`flex-1 flex flex-col items-center justify-center border-2 border-dashed rounded-lg transition-colors ${isDragging ? 'border-[#81b64c] bg-[#262421]' : 'border-[#403d39] bg-[#161512] hover:bg-[#262421]/50'} cursor-pointer`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input 
              type="file" 
              accept="application/pdf" 
              className="hidden" 
              ref={fileInputRef}
              onChange={handleFileInput}
            />
            
            {isProcessing ? (
              <div className="flex flex-col items-center gap-4 text-[#81b64c]">
                <span className="text-lg font-medium tracking-wide">Processing...</span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 text-[#8c8c8c] pointer-events-none p-6 text-center">
                <UploadCloud size={64} className="mb-4 text-[#403d39]" />
                <p className="text-lg font-medium text-[#dbd9d6]">Drag & Drop PDF</p>
                <p className="text-sm">or click to select file</p>
              </div>
            )}
          </div>
        </section>

        <section className="flex-1 flex flex-col bg-[#262421] border border-[#403d39] rounded-lg overflow-hidden min-h-0 relative shadow-lg">
          <div className="flex items-center justify-between p-3 border-b border-[#403d39] bg-[#161512]/50">
            <h2 className="text-sm font-semibold text-[#8c8c8c] uppercase tracking-wider">Markdown Output</h2>
            <div className="flex gap-2">
              <button 
                onClick={copyToClipboard}
                disabled={!markdown}
                className="bg-[#262421] border border-[#403d39] hover:bg-[#403d39] disabled:opacity-50 disabled:cursor-not-allowed text-[#dbd9d6] text-xs font-bold py-1.5 px-4 rounded transition-colors shadow-sm flex items-center gap-1.5"
              >
                <Copy size={14} />
                Copy
              </button>
              <button 
                onClick={downloadMarkdown}
                disabled={!markdown}
                className="bg-[#81b64c] hover:bg-[#95c560] disabled:bg-[#403d39] disabled:text-[#8c8c8c] disabled:cursor-not-allowed text-white text-xs font-bold py-1.5 px-4 rounded transition-colors shadow-sm flex items-center gap-1.5"
              >
                <Download size={14} />
                Download
              </button>
            </div>
          </div>
          <textarea 
            className="flex-1 w-full bg-transparent text-[#dbd9d6] p-4 resize-none focus:outline-none focus:ring-1 focus:ring-[#81b64c] font-mono text-sm leading-relaxed"
            value={markdown}
            readOnly
            placeholder="Markdown will appear here."
          ></textarea>
        </section>
      </main>
    </div>
  );
}
