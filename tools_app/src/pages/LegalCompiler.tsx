import React, { useState, useEffect, useRef } from 'react';
import JSZip from 'jszip';
import mammoth from 'mammoth';

interface ParsedDocument {
  title: string;
  content: string;
}

interface DocStats {
  parts: number;
  chapters: number;
  sections: number;
  articles: number;
  paragraphs: number;
  items: number;
}

// --- Helper: Encoding Detection & Reading ---
const readFileAuto = async (file: File): Promise<string> => {
  const buffer = await file.arrayBuffer();
  try {
    const decoder = new TextDecoder("utf-8", { fatal: true });
    return decoder.decode(buffer);
  } catch (e) {
    try {
      const decoder = new TextDecoder("shift-jis", { fatal: true });
      return decoder.decode(buffer);
    } catch (e2) {
      const decoder = new TextDecoder("utf-8");
      return decoder.decode(buffer);
    }
  }
};

// --- Helper: Text Normalization ---
const normalizeText = (str: string | null | undefined): string => {
  if (!str) return "";
  return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s: string) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
            .replace(/\u3000/g, ' ')
            .replace(/&nbsp;/g, ' ')
            .trim();
};

// --- Helper: Kanji Number to Arabic Number ---
const parseKanjiNum = (s: string | null | undefined): number | string => {
  if (!s) return "";
  if (s.match(/^[0-9０-９]+$/)) {
    return s.replace(/[０-９]/g, (c: string) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0));
  }
  const map: Record<string, number> = {'〇':0,'一':1,'二':2,'三':3,'四':4,'五':5,'六':6,'七':7,'八':8,'九':9};
  const unit: Record<string, number> = {'十':10,'百':100,'千':1000};
  let res = 0;
  let tmp = 0;
  for(const char of s) {
    if(unit[char]) {
      if(tmp === 0) tmp = 1;
      res += tmp * unit[char];
      tmp = 0;
    } else if (map[char] !== undefined) {
      tmp = map[char];
    }
  }
  return res + tmp;
};

const extractAndConvertNum = (s: string | null | undefined): string => {
  if (!s) return "";
  const cleanStr = s.replace(/[第編章節条項号]/g, '').trim();
  return parseKanjiNum(cleanStr).toString();
};

// --- Core Logic 1: XML Parsing ---
const ERA_MAP: Record<string, string> = { "Meiji": "明治", "Taisho": "大正", "Showa": "昭和", "Heisei": "平成", "Reiwa": "令和" };

const parseLegalXML = (xmlText: string): ParsedDocument => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");

  const lawTitle = normalizeText(xmlDoc.querySelector('LawTitle')?.textContent) || "Unknown_Law";
  const lawNum = normalizeText(xmlDoc.querySelector('LawNum')?.textContent) || "";

  let enactDate = "";
  const lawTag = xmlDoc.querySelector('Law');
  if (lawTag && lawTag.getAttribute('Era')) {
    const eraRaw = lawTag.getAttribute('Era')!;
    const era = ERA_MAP[eraRaw] || eraRaw;
    enactDate = `${era}${lawTag.getAttribute('Year')}年${lawTag.getAttribute('PromulgateMonth')}月${lawTag.getAttribute('PromulgateDay')}日公布`;
    enactDate = normalizeText(enactDate);
  }

  let mdBody = `# ${lawTitle}\n\n`;
  const stats: DocStats = { parts: 0, chapters: 0, sections: 0, articles: 0, paragraphs: 0, items: 0 };

  const clean = (t: string | null | undefined): string => t ? normalizeText(t.replace(/\s+/g, ' ')) : '';

  const getSiblingIndex = (node: Element, tag: string): number => {
    let count = 1;
    let prev = node.previousElementSibling;
    while(prev) {
      if(prev.nodeName === tag) count++;
      prev = prev.previousElementSibling;
    }
    return count;
  };

  const traverse = (node: Element | null): void => {
    if (!node) return;
    const name = node.nodeName;

    if (name === 'Part') {
      mdBody += `\n## ${normalizeText(node.querySelector('PartTitle')?.textContent)}\n\n`;
      stats.parts++;
    } else if (name === 'Chapter') {
      mdBody += `\n### ${normalizeText(node.querySelector('ChapterTitle')?.textContent)}\n\n`;
      stats.chapters++;
    } else if (name === 'Section') {
      mdBody += `\n#### ${normalizeText(node.querySelector('SectionTitle')?.textContent)}\n\n`;
      stats.sections++;
    } else if (name === 'Article') {
      const titleRaw = normalizeText(node.querySelector('ArticleTitle')?.textContent);
      const num = extractAndConvertNum(titleRaw);
      let caption = normalizeText(node.querySelector('ArticleCaption')?.textContent);
      if (caption) {
        caption = caption.replace(/^[\(（](.*?)[\)）]$/, '$1');
        caption = `(${caption})`;
      } else {
        caption = "";
      }
      const captionStr = caption ? ` ${caption}` : "";
      mdBody += `\n##### 第${num}条${captionStr}\n`;
      stats.articles++;
    } else if (name === 'Paragraph') {
      let numStr = normalizeText(node.querySelector('ParagraphNum')?.textContent);
      const num = numStr ? extractAndConvertNum(numStr) : getSiblingIndex(node, 'Paragraph').toString();
      const sentence = node.querySelector('ParagraphSentence')?.textContent || '';
      mdBody += `**第${num}項** ${clean(sentence)}\n\n`;
      stats.paragraphs++;
    } else if (name === 'Item') {
      const titleRaw = normalizeText(node.querySelector('ItemTitle')?.textContent);
      const num = extractAndConvertNum(titleRaw);
      const sentence = node.querySelector('ItemSentence')?.textContent || '';
      mdBody += `- **第${num}号** ${clean(sentence)}\n`;
      stats.items++;
    } else if (name === 'Subitem1') {
      const title = normalizeText(node.querySelector('Subitem1Title')?.textContent);
      const sentence = node.querySelector('Subitem1Sentence')?.textContent || '';
      mdBody += `  - **${title}** ${clean(sentence)}\n`;
    } else if (name === 'Subitem2') {
      const title = normalizeText(node.querySelector('Subitem2Title')?.textContent);
      const sentence = node.querySelector('Subitem2Sentence')?.textContent || '';
      mdBody += `    - **${title}** ${clean(sentence)}\n`;
    } else if (name === 'Subitem3') {
      const title = normalizeText(node.querySelector('Subitem3Title')?.textContent);
      const sentence = node.querySelector('Subitem3Sentence')?.textContent || '';
      mdBody += `      - **${title}** ${clean(sentence)}\n`;
    } else if (name === 'Subitem4') {
      const title = normalizeText(node.querySelector('Subitem4Title')?.textContent);
      const sentence = node.querySelector('Subitem4Sentence')?.textContent || '';
      mdBody += `        - **${title}** ${clean(sentence)}\n`;
    } else if (name === 'Subitem5') {
      const title = normalizeText(node.querySelector('Subitem5Title')?.textContent);
      const sentence = node.querySelector('Subitem5Sentence')?.textContent || '';
      mdBody += `          - **${title}** ${clean(sentence)}\n`;
    } else if (name === 'SupplProvision') {
      const label = normalizeText(node.querySelector('SupplProvisionLabel')?.textContent);
      mdBody += `\n## ${label || '附則'}\n\n`;
    } else if (name === 'AppdxTableTitle') {
      mdBody += `\n## ${clean(node.textContent)}\n\n`;
      return;
    } else if (name === 'RelatedArticleNum') {
      mdBody += `${clean(node.textContent)}\n\n`;
      return;
    } else if (name === 'TableStruct') {
      const tableNode = node.querySelector('Table');
      if (tableNode) {
        let tableMd = '\n';
        const rows = tableNode.querySelectorAll('TableRow');
        if (rows.length > 0) {
          rows.forEach((row: any, rowIndex: number) => {
            const cols = Array.from(row.querySelectorAll('TableColumn'));
            const colSentencesList = cols.map((col: any) => {
              const sentences = Array.from(col.querySelectorAll('Sentence, ColumnSentence > Sentence'));
              if (sentences.length > 0) {
                return sentences.map((s: any) => normalizeText(s.textContent).replace(/\|/g, '｜'));
              } else {
                return [normalizeText(col.textContent).replace(/\|/g, '｜')];
              }
            });
            const maxLines = Math.max(...colSentencesList.map((list: any) => list.length));
            const lastValues = new Array(cols.length).fill('');
            for (let i = 0; i < maxLines; i++) {
              let rowMd = '|';
              colSentencesList.forEach((list: any, colIndex: number) => {
                if (list[i] !== undefined) {
                  lastValues[colIndex] = list[i];
                }
                rowMd += ` ${lastValues[colIndex]} |`;
              });
              tableMd += rowMd + '\n';
              if (rowIndex === 0 && i === 0) {
                let sep = '|';
                cols.forEach(() => { sep += ' --- |'; });
                tableMd += sep + '\n';
              }
            }
          });
          mdBody += tableMd + '\n';
        }
      }
      return;
    }

    Array.from(node.children).forEach((child: Element) => {
      const ignoreTags = [
        'PartTitle', 'ChapterTitle', 'SectionTitle', 'ArticleTitle',
        'ArticleCaption', 'ParagraphNum', 'ParagraphSentence',
        'ItemTitle', 'ItemSentence',
        'Subitem1Title', 'Subitem1Sentence',
        'Subitem2Title', 'Subitem2Sentence',
        'Subitem3Title', 'Subitem3Sentence',
        'Subitem4Title', 'Subitem4Sentence',
        'Subitem5Title', 'Subitem5Sentence',
        'SupplProvisionLabel'
      ];
      if (!ignoreTags.includes(child.nodeName)) {
        traverse(child);
      }
    });
  };

  const mainProvision = xmlDoc.querySelector('MainProvision');
  if (mainProvision) traverse(mainProvision);
  const supplProvisions = xmlDoc.querySelectorAll('SupplProvision');
  supplProvisions.forEach(sp => traverse(sp));
  const appdxTables = xmlDoc.querySelectorAll('AppdxTable');
  appdxTables.forEach(at => traverse(at));

  const header = `---
title: "${lawTitle}"
law_num: "${lawNum}"
enact_date: "${enactDate}"
source_type: "xml_converted"
structure_summary:
  parts: ${stats.parts}
  chapters: ${stats.chapters}
  sections: ${stats.sections}
  articles: ${stats.articles}
  paragraphs: ${stats.paragraphs}
  items: ${stats.items}
---\n\n`;

  return { title: lawTitle, content: header + mdBody };
};

// --- Core Logic 2: Legacy HTML Parsing ---
const parseReikiHTML = (htmlText: string, fallbackTitle: string = "Unknown_Legacy_Law"): ParsedDocument => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, "text/html");
  const title = normalizeText(doc.querySelector('title')?.textContent) || fallbackTitle;

  let mdBody = `# ${title}\n\n`;
  const stats: DocStats = { parts: 0, chapters: 0, sections: 0, articles: 0, paragraphs: 0, items: 0 };

  const container =
    doc.querySelector('.joubun') ||
    doc.querySelector('#primary') ||
    doc.querySelector('#main') ||
    doc.body;

  let lines: Element[] = [];
  const elines = container.querySelectorAll('.eline');
  if (elines.length > 0) {
    lines = Array.from(elines);
  } else {
    lines = Array.from(container.querySelectorAll('div, p')).filter(el => {
      return el.childElementCount === 0 || ((el as HTMLElement).innerText && (el as HTMLElement).innerText.length < 200);
    });
  }

  let lawNum = "";
  let enactDate = "";

  for (let i = 0; i < Math.min(lines.length, 25); i++) {
    const rawText = normalizeText(lines[i].textContent);
    if (!rawText || rawText === title) continue;

    const dateMatch = rawText.match(/((?:明治|大正|昭和|平成|令和)[0-9０-９元一二三四五六七八九十百]+年[0-9０-９一二三四五六七八九十]+月[0-9０-９一二三四五六七八九十]+日)/);
    if (dateMatch && !enactDate) {
      enactDate = dateMatch[1];
      if (rawText.includes('公布')) enactDate += '公布';
    }

    const numMatch = rawText.match(/[^　\s]*第[0-9０-９一二三四五六七八九十百千]+号/);
    if (numMatch && !lawNum) {
      lawNum = numMatch[0];
    }
  }

  let isAfterArticleTitle = false;

  lines.forEach((el: Element) => {
    const rawText = normalizeText(el.textContent);
    if (!rawText) return;

    let structMatch = rawText.match(/^第([0-9０-９一-千]+)編[\s　]*(.*)/);
    if (structMatch) {
      stats.parts++;
      mdBody += `\n## 第${parseKanjiNum(structMatch[1])}編 ${structMatch[2]}\n\n`;
      isAfterArticleTitle = false;
      return;
    }
    structMatch = rawText.match(/^第([0-9０-９一-千]+)章[\s　]*(.*)/);
    if (structMatch) {
      stats.chapters++;
      mdBody += `\n### 第${parseKanjiNum(structMatch[1])}章 ${structMatch[2]}\n\n`;
      isAfterArticleTitle = false;
      return;
    }
    structMatch = rawText.match(/^第([0-9０-９一-千]+)節[\s　]*(.*)/);
    if (structMatch) {
      stats.sections++;
      mdBody += `\n#### 第${parseKanjiNum(structMatch[1])}節 ${structMatch[2]}\n\n`;
      isAfterArticleTitle = false;
      return;
    }

    let match = rawText.match(/^[\(（](.+?)[\)）]\s*第([0-9０-９一-千]+)条[\s　]*(.*)/) ||
                rawText.match(/^第([0-9０-９一-千]+)条[\s　]+[\(（](.+?)[\)）][\s　]*(.*)/);

    if (match) {
      const isLegacyCaptionFirst = rawText.startsWith('(') || rawText.startsWith('（');
      const num = isLegacyCaptionFirst ? parseKanjiNum(match[2]) : parseKanjiNum(match[1]);
      const caption = isLegacyCaptionFirst ? `(${match[1]})` : `(${match[2]})`;
      const content = match[3];
      mdBody += `\n##### 第${num}条 ${caption}\n`;
      stats.articles++;
      isAfterArticleTitle = true;
      if (content) {
        mdBody += `**第1項** ${content}\n\n`;
        stats.paragraphs++;
        isAfterArticleTitle = false;
      }
      return;
    }

    match = rawText.match(/^第([0-9０-９一-千]+)条[\s　]*(.*)/);
    if (match) {
      const num = parseKanjiNum(match[1]);
      const content = match[2];
      mdBody += `\n##### 第${num}条\n`;
      stats.articles++;
      isAfterArticleTitle = true;
      if (content) {
        mdBody += `**第1項** ${content}\n\n`;
        stats.paragraphs++;
        isAfterArticleTitle = false;
      }
      return;
    }

    if (rawText.match(/^[0-9０-９]+[\s　]/)) {
      const numStr = rawText.match(/^[0-9０-９]+/)?.[0] || "2";
      const num = parseKanjiNum(numStr);
      const body = rawText.substring(numStr.length).trim();
      if (!body.startsWith('年') && !body.startsWith('月') && !body.startsWith('日')) {
        mdBody += `**第${num}項** ${body}\n\n`;
        stats.paragraphs++;
        isAfterArticleTitle = false;
        return;
      }
    }

    let itemMatch = rawText.match(/^[\(（]([0-9０-９一-千]+)[\)）][\s　]*(.*)/);
    if (itemMatch) {
      const num = extractAndConvertNum(itemMatch[1]);
      mdBody += `- **第${num}号** ${itemMatch[2] || rawText.substring(itemMatch[0].length).trim()}\n`;
      stats.items++;
      isAfterArticleTitle = false;
      return;
    }

    itemMatch = rawText.match(/^第([0-9０-９一-千]+)号[\s　]*(.*)/);
    if (itemMatch) {
      const num = extractAndConvertNum(itemMatch[1]);
      const content = itemMatch[2];
      mdBody += `- **第${num}号** ${content}\n`;
      stats.items++;
      isAfterArticleTitle = false;
      return;
    }

    let subMatch1 = rawText.match(/^([イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセスス])[\s　]+(.*)/);
    if (subMatch1) {
      mdBody += `  - **${subMatch1[1]}** ${subMatch1[2]}\n`;
      isAfterArticleTitle = false;
      return;
    }

    if (rawText.match(/^[ア-ン][\s　]/)) {
      const splitPos = rawText.indexOf(' ') !== -1 ? rawText.indexOf(' ') : rawText.indexOf('　');
      const mark = rawText.substring(0, splitPos);
      const body = rawText.substring(splitPos + 1).trim();
      mdBody += `  - **${mark}** ${body}\n`;
      isAfterArticleTitle = false;
      return;
    }

    if (rawText !== title && rawText !== lawNum && !rawText.includes(enactDate)) {
      if (isAfterArticleTitle) {
        mdBody += `**第1項** ${rawText}\n\n`;
        stats.paragraphs++;
        isAfterArticleTitle = false;
      } else {
        if (rawText.match(/^[\(（]一部改正/)) {
          mdBody += `\n*${rawText}*\n\n`;
        } else if (rawText.match(/^附[\s　]*則/)) {
          mdBody += `\n## ${rawText}\n\n`;
        } else {
          mdBody += `${rawText}\n`;
        }
      }
    }
  });

  const header = `---
title: "${title}"
law_num: "${lawNum || 'Unknown'}"
enact_date: "${enactDate || 'Unknown'}"
source_type: "legacy_html_converted"
description: "Converted from Reiki-Base/MHTML/HTML/DOCX format"
structure_summary:
  parts: ${stats.parts}
  chapters: ${stats.chapters}
  sections: ${stats.sections}
  articles: ${stats.articles}
  paragraphs: ${stats.paragraphs}
  items: ${stats.items}
---\n\n`;

  return { title, content: header + mdBody };
};

// --- UI Component ---
export default function LegalCompiler() {
  const [logs, setLogs] = useState<string[]>([]);
  const [processing, setProcessing] = useState<boolean>(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [downloadName, setDownloadName] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addLog = (msg: string) => setLogs(prev => [...prev.slice(-5), msg]);

  const handleFiles = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;

    setProcessing(true);
    setDownloadUrl(null);
    setLogs([]);
    const outputZip = new JSZip();
    let processedCount = 0;

    try {
      addLog("Initializing compiler...");
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const fname = file.name.toLowerCase();

        if (fname.endsWith('.zip')) {
          addLog(`Reading archive: ${file.name}`);
          const loadedZip = await JSZip.loadAsync(file);
          const processableFiles = Object.keys(loadedZip.files).filter(n => !n.startsWith('__MACOSX/') && (n.endsWith('.xml') || n.endsWith('.html') || n.endsWith('.htm') || n.endsWith('.docx')));

          for (const filePath of processableFiles) {
            const lowerPath = filePath.toLowerCase();
            const fallbackTitle = filePath.split('/').pop()?.replace(/\.[^/.]+$/, "") || "Unknown";

            if (lowerPath.endsWith('.xml')) {
              const xmlText = await loadedZip.files[filePath].async("text");
              const { title, content } = parseLegalXML(xmlText);
              const safeName = title.replace(/[\\/:*?"<>|]/g, '_');
              outputZip.file(`${safeName}.md`, content);
              processedCount++;
              addLog(`Compiled XML: ${title}`);
            } else if (lowerPath.endsWith('.html') || lowerPath.endsWith('.htm')) {
              const htmlText = await loadedZip.files[filePath].async("text");
              const { title, content } = parseReikiHTML(htmlText, fallbackTitle);
              const safeName = title.replace(/[\\/:*?"<>|]/g, '_');
              outputZip.file(`${safeName}_legacy.md`, content);
              processedCount++;
              addLog(`Compiled HTML: ${title}`);
            } else if (lowerPath.endsWith('.docx')) {
              const arrayBuffer = await loadedZip.files[filePath].async("arraybuffer");
              const result = await mammoth.convertToHtml({ arrayBuffer });
              const { title, content } = parseReikiHTML(result.value, fallbackTitle);
              const safeName = title.replace(/[\\/:*?"<>|]/g, '_');
              outputZip.file(`${safeName}_docx.md`, content);
              processedCount++;
              addLog(`Compiled DOCX: ${title}`);
            }
          }
        } else if (fname.endsWith('.xml')) {
          const xmlText = await readFileAuto(file);
          const { title, content } = parseLegalXML(xmlText);
          const safeName = title.replace(/[\\/:*?"<>|]/g, '_');
          outputZip.file(`${safeName}.md`, content);
          processedCount++;
          addLog(`Compiled XML: ${title}`);
        } else if (fname.endsWith('.html') || fname.endsWith('.htm')) {
          addLog(`Reading Legacy HTML: ${file.name}`);
          const rawText = await readFileAuto(file);
          const fallbackTitle = file.name.replace(/\.[^/.]+$/, "");
          const { title, content } = parseReikiHTML(rawText, fallbackTitle);
          const safeName = title.replace(/[\\/:*?"<>|]/g, '_');
          outputZip.file(`${safeName}_legacy.md`, content);
          processedCount++;
          addLog(`Compiled Legacy: ${title}`);
        } else if (fname.endsWith('.docx')) {
          addLog(`Reading DOCX: ${file.name}`);
          const arrayBuffer = await file.arrayBuffer();
          const result = await mammoth.convertToHtml({ arrayBuffer });
          const fallbackTitle = file.name.replace(/\.[^/.]+$/, "");
          const { title, content } = parseReikiHTML(result.value, fallbackTitle);
          const safeName = title.replace(/[\\/:*?"<>|]/g, '_');
          outputZip.file(`${safeName}_docx.md`, content);
          processedCount++;
          addLog(`Compiled DOCX: ${title}`);
        }
      }

      if (processedCount > 0) {
        addLog(`Building artifacts...`);
        const contentBlob = await outputZip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(contentBlob);
        setDownloadUrl(url);
        setDownloadName(`Legal_Artifacts_${new Date().toISOString().slice(0,10)}.zip`);
        addLog("Build complete. Ready to download.");
      } else {
        addLog("Error: No valid sources found.");
      }
    } catch (e: any) {
      addLog(`Fatal Error: ${e.message}`);
      console.error(e);
    } finally {
      setProcessing(false);
    }
  };

  const reset = () => {
    setDownloadUrl(null);
    setLogs([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 overflow-auto" style={{ background: '#161512', color: '#bababa' }}>
      <div className="w-full max-w-lg">

        <header className="flex items-center space-x-3 mb-6 select-none opacity-90">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3692e7" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>
          <h1 className="text-xl font-light tracking-wide text-[#bababa]">Legal <span className="text-[#3692e7] font-normal">Compiler</span></h1>
        </header>

        {!downloadUrl ? (
          <div
            className={`rounded p-12 text-center border-2 border-dashed transition-all duration-200 cursor-pointer
              ${isDragging ? 'bg-[#2b3036] border-[#3692e7]' : 'bg-[#262421] border-[#404040] hover:border-[#606060]'}`}
            style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.5)' }}
            onClick={() => !processing && fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              multiple
              accept=".xml,.zip,.html,.htm,.docx"
              onChange={handleFileInputChange}
            />

            {processing ? (
              <div className="flex flex-col items-center animate-pulse">
                <svg className="w-10 h-10 text-[#3692e7] animate-spin mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
                <p className="text-sm font-mono text-[#3692e7]">COMPILING...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#505050" strokeWidth="1.5" className="mx-auto"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                <div>
                  <p className="text-base text-[#bababa]">Drop Source Code</p>
                  <p className="text-[10px] text-[#606060] mt-2 uppercase tracking-widest font-mono">
                    XML (v5) / ZIP / HTML (Legacy) / DOCX
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded p-8 text-center border border-[#303030] bg-[#262421]" style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-[#2b3036] flex items-center justify-center border border-[#3692e7]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3692e7" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
            </div>
            <h2 className="text-lg text-[#bababa] mb-2">Compilation Complete</h2>
            <p className="text-xs text-[#606060] mb-6 font-mono">Ready to export artifacts.</p>

            <div className="flex space-x-3 justify-center">
              <a
                href={downloadUrl}
                download={downloadName}
                className="bg-[#3692e7] hover:bg-[#2b7bc4] text-white px-6 py-2 rounded text-sm font-medium transition-colors flex items-center no-underline"
              >
                Download ZIP
              </a>
              <button
                onClick={reset}
                className="bg-[#303030] hover:bg-[#404040] text-[#bababa] px-4 py-2 rounded text-sm transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        )}

        <div className="mt-4 rounded p-3 font-mono text-[11px] text-[#606060] h-32 overflow-hidden border border-[#303030] bg-[#262421]" style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
          <div className="flex items-center space-x-2 mb-2 border-b border-[#303030] pb-1">
            <div className="w-2 h-2 rounded-full bg-[#505050]"></div>
            <div className="w-2 h-2 rounded-full bg-[#505050]"></div>
            <div className="w-2 h-2 rounded-full bg-[#505050]"></div>
            <span className="opacity-50">System Log</span>
          </div>
          <div className="flex flex-col space-y-1">
            {logs.length === 0 && <span className="opacity-30">Ready for input...</span>}
            {logs.map((l, i) => (
              <div key={i} className="truncate flex items-center">
                <span className="text-[#3692e7] mr-2">➜</span>
                <span className="opacity-80">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center text-[10px] text-[#404040] font-mono">
          <span>TARGET: NOTEBOOKLM / MD</span>
          <span>BUILD: STABLE + LEGACY (HTML/DOCX)</span>
        </div>

      </div>
    </div>
  );
}
