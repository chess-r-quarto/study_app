import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link2, ArrowLeft, RefreshCw, Trash2, Copy, Check, Info } from 'lucide-react';

export default function YouTubeToNotebook() {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const outputRef = useRef<HTMLTextAreaElement>(null);

  /**
   * Formats the input string by splitting on %0A, spaces, or actual newlines,
   * and joins them back with clean newlines.
   */
  const handleFormat = () => {
    const formatted = input
      .split(/(?:%0A|\n|\s)+/i)
      .filter((line) => line.trim() !== '')
      .join('\n');

    setOutput(formatted);
    setIsCopied(false);
  };

  /**
   * Clears both input and output fields.
   */
  const handleClear = () => {
    setInput('');
    setOutput('');
    setIsCopied(false);
  };

  /**
   * Copies the formatted output to the clipboard.
   */
  const handleCopy = async () => {
    if (!output) return;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(output);
      } else if (outputRef.current) {
        outputRef.current.select();
        document.execCommand('copy');
      }
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#161512] text-[#bababa] p-4 sm:p-8 font-sans">
      {/* Top Navigation */}
      <div className="max-w-4xl mx-auto mb-4 flex items-center justify-between text-xs text-neutral-400">
        <Link
          to="/"
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ツール一覧に戻る</span>
        </Link>
        <span className="font-mono text-neutral-500">YouTube URL Formatter</span>
      </div>

      <div className="max-w-4xl mx-auto bg-[#262421] rounded-2xl shadow-2xl overflow-hidden border border-[#302e2b]">
        {/* Header */}
        <div className="bg-[#201e1b] px-6 py-4 border-b border-[#302e2b] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#302e2b] flex items-center justify-center text-[#629924]">
              <Link2 className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white leading-tight">
                YouTube URL Formatter
              </h1>
              <p className="text-xs text-neutral-400">
                抽出したURL一覧をクリーンな改行区切りのフォーマットに整形します
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-[11px] text-neutral-500 bg-[#161512] px-2.5 py-1 rounded border border-[#302e2b]">
            <Info className="w-3.5 h-3.5 text-[#629924]" />
            <span>%0A や空白区切りに対応</span>
          </div>
        </div>

        {/* Workspace */}
        <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-6">
          {/* Input Section */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label htmlFor="input-urls" className="font-semibold text-sm text-[#bababa]">
                入力テキスト (Raw Input)
              </label>
              <span className="text-[11px] text-neutral-500 font-mono">
                {input.length} 文字
              </span>
            </div>
            <textarea
              id="input-urls"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="https://www.youtube.com/...%0Ahttps://www.youtube.com/..."
              className="w-full h-64 sm:h-96 p-4 bg-[#161512] border border-[#302e2b] text-[#bababa] rounded-xl focus:ring-1 focus:ring-[#629924] focus:border-[#629924] outline-none transition-all resize-none font-mono text-sm placeholder-[#403d39]"
              spellCheck="false"
            />
            <div className="flex gap-3 mt-1">
              <button
                onClick={handleFormat}
                disabled={!input}
                className="flex-1 bg-[#629924] hover:bg-[#53821f] text-white font-medium py-2.5 px-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-sm shadow-md cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>URL整形を実行</span>
              </button>
              <button
                onClick={handleClear}
                disabled={!input && !output}
                className="bg-[#302e2b] hover:bg-[#3d3a36] text-[#bababa] font-medium py-2.5 px-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 text-sm cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span>クリア</span>
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label htmlFor="output-urls" className="font-semibold text-sm text-[#bababa]">
                整形後テキスト (Clean URLs)
              </label>
              {output && (
                <span className="text-[11px] text-[#629924] font-mono">
                  {output.split('\n').filter(Boolean).length} 件のURL
                </span>
              )}
            </div>
            <textarea
              id="output-urls"
              ref={outputRef}
              value={output}
              readOnly
              placeholder="整形されたURLがここに出力されます"
              className="w-full h-64 sm:h-96 p-4 bg-[#161512] border border-[#302e2b] rounded-xl outline-none resize-none font-mono text-sm text-[#bababa] placeholder-[#403d39]"
            />
            <div className="mt-1">
              <button
                onClick={handleCopy}
                disabled={!output}
                className={`w-full font-medium py-2.5 px-4 rounded-xl transition-all flex justify-center items-center gap-2 text-sm cursor-pointer ${
                  isCopied
                    ? 'bg-[#243615] text-[#74b82a] border border-[#629924]'
                    : 'bg-[#302e2b] hover:bg-[#3d3a36] text-[#bababa] disabled:opacity-50 disabled:cursor-not-allowed border border-transparent'
                }`}
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>コピー完了！</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>結果をコピー</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
