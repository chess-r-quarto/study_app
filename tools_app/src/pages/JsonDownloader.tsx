import React from 'react';
import { DownloadCloud } from 'lucide-react';

export default function JsonDownloader() {
  return (
    <div className="flex flex-col h-full gap-6 items-center justify-center text-[#8c8c8c]">
      <DownloadCloud size={64} className="mb-4" />
      <h2 className="text-2xl font-bold">JSON Downloader</h2>
      <p>Migration to tools_app in progress...</p>
    </div>
  );
}
