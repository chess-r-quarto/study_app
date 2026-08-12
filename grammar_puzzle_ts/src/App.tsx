import React, { useState, useEffect, useRef } from 'react';

    

    // --- Types ---
    type Role = 'S' | 'V' | 'O' | 'C' | 'M' | 'Real-S';
    type PlayMode = 'random' | 'sequential';
    type GameState = 'home' | 'playing' | 'finished';

    interface StructureItem {
      text: string;
      role: Role;
      detail?: string;
      explanation?: string;
    }

    interface Question {
      id: number;
      pattern: string;
      japanese: string;
      words: string[];
      structure: StructureItem[];
      overallExplanation?: string;
    }

    interface WordItem {
      id: string;
      text: string;
    }

    // --- Minimal Default Data ---
    const DEFAULT_QUESTIONS: Question[] = [
      {
        id: 1, pattern: 'SVO (O=名詞節)', japanese: '私は彼が正しいと思う。',
        words: ['I', 'think', 'that', 'he', 'is', 'right'],
        overallExplanation: '接続詞thatが導く節全体が、動詞thinkの目的語(O)となる構造です。',
        structure: [
          { text: 'I', role: 'S', detail: '代名詞 (Pronoun)', explanation: '主語です。' },
          { text: 'think', role: 'V', detail: '他動詞 (Transitive Verb)', explanation: '述語動詞です。' },
          { text: 'that he is right', role: 'O', detail: '名詞節 (Noun Clause)', explanation: '名詞節として目的語になっています。' }
        ]
      }
    ];

    // --- Utilities ---
    function shuffleArray<T>(array: T[]): T[] {
      const result = [...array];
      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
      }
      return result;
    }

    const getRoleColorClass = (role: Role) => {
      switch (role) {
        case 'S': case 'Real-S': return 'bg-lichess-roleS text-white border-lichess-roleS';
        case 'V': return 'bg-lichess-roleV text-white border-lichess-roleV';
        case 'O': return 'bg-lichess-roleO text-white border-lichess-roleO';
        case 'C': return 'bg-lichess-roleC text-white border-lichess-roleC';
        case 'M': return 'bg-lichess-roleM text-white border-lichess-roleM';
        default: return 'bg-gray-500 text-white border-gray-500';
      }
    };

    const getRoleBorderClass = (role: Role) => {
      switch (role) {
        case 'S': case 'Real-S': return 'border-lichess-roleS';
        case 'V': return 'border-lichess-roleV';
        case 'O': return 'border-lichess-roleO';
        case 'C': return 'border-lichess-roleC';
        case 'M': return 'border-lichess-roleM';
        default: return 'border-gray-500';
      }
    };

    const getRoleFullName = (role: Role) => {
      switch (role) {
        case 'S': return 'Subject (主語)';
        case 'Real-S': return 'Real Subject (真主語)';
        case 'V': return 'Verb (動詞)';
        case 'O': return 'Object (目的語)';
        case 'C': return 'Complement (補語)';
        case 'M': return 'Modifier (修飾語)';
        default: return '';
      }
    };

    // --- Audio Helper ---
    const speakText = (text: string, lang: string, rate: number): Promise<void> => {
      return new Promise((resolve) => {
        if (!('speechSynthesis' in window)) {
          resolve();
          return;
        }
        const cleanText = text.replace(/\s+([.,!?])/g, '$1');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = lang;
        utterance.rate = rate;
        
        utterance.onend = () => resolve();
        utterance.onerror = () => resolve();
        
        window.speechSynthesis.speak(utterance);
      });
    };

    // --- Main Component ---
    function App() {
      // Global States
      const [questionsData, setQuestionsData] = useState<Question[]>(DEFAULT_QUESTIONS);
      const [gameState, setGameState] = useState<GameState>('home');
      const [playMode, setPlayMode] = useState<PlayMode>('random');
      const [startPosition, setStartPosition] = useState<string>('1');
      const [autoAdvance, setAutoAdvance] = useState<boolean>(false);
      const [showSettings, setShowSettings] = useState(false);
      
      // Read-Aloud Audio States
      const [readAloudSettings, setReadAloudSettings] = useState({
        enabled: false,
        englishRepeat: 1,
        listenOnly: false
      });
      const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

      // Playing States
      const [questionsQueue, setQuestionsQueue] = useState<Question[]>([]);
      const [currentIndex, setCurrentIndex] = useState<number>(0);
      const [availableWords, setAvailableWords] = useState<WordItem[]>([]);
      const [selectedWords, setSelectedWords] = useState<WordItem[]>([]);
      const [status, setStatus] = useState<'playing' | 'correct' | 'incorrect' | 'resigned'>('playing');
      const [inspectedIndex, setInspectedIndex] = useState<number | null>(null);

      // Custom Modal State
      const [modal, setModal] = useState<{isOpen: boolean, type: 'alert' | 'confirm', message: string, onConfirm: () => void}>({
        isOpen: false, type: 'alert', message: '', onConfirm: () => {}
      });

      const fileInputRef = useRef<HTMLInputElement>(null);

      const showAlert = (message: string) => {
        setModal({ isOpen: true, type: 'alert', message, onConfirm: () => setModal(m => ({...m, isOpen: false})) });
      };
      
      const showConfirm = (message: string, onConfirmCallback: () => void) => {
        setModal({
          isOpen: true, 
          type: 'confirm', 
          message, 
          onConfirm: () => {
            onConfirmCallback();
            setModal(m => ({...m, isOpen: false}));
          }
        });
      };

      const startPuzzles = () => {
        if (questionsData.length === 0) {
          showAlert('No puzzles loaded!');
          return;
        }

        // iOS/Safari Workaround to initialize SpeechSynthesis
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance('');
          utterance.volume = 0;
          window.speechSynthesis.speak(utterance);
        }
        
        let queue = [...questionsData];
        let startIndex = 0;

        if (playMode === 'random') {
          queue = shuffleArray(queue);
        } else {
          // Sequential mode
          let pos = parseInt(startPosition, 10);
          if (isNaN(pos) || pos < 1) pos = 1;
          if (pos > questionsData.length) pos = questionsData.length;
          
          startIndex = pos - 1;
          setStartPosition(pos.toString());
        }
        
        setQuestionsQueue(queue);
        setCurrentIndex(startIndex);
        setGameState('playing');
        setShowSettings(false);
      };

      // Load specific question
      useEffect(() => {
        if (gameState === 'playing' && questionsQueue.length > 0 && currentIndex < questionsQueue.length) {
          setupQuestion(questionsQueue[currentIndex]);
        } else if (gameState === 'playing' && currentIndex >= questionsQueue.length && questionsQueue.length > 0) {
          setGameState('finished');
        }
      }, [currentIndex, questionsQueue, gameState]);

      // --- Auto-Evaluation Logic ---
      useEffect(() => {
        const currentQuestion = questionsQueue[currentIndex];
        if (
          status === 'playing' && 
          currentQuestion && 
          selectedWords.length > 0 && 
          selectedWords.length === currentQuestion.words.length
        ) {
          const isMatch = selectedWords.every((w, i) => w.text === currentQuestion.words[i]);

          if (isMatch) {
            setStatus('correct');
            // Listen OnlyモードまたはAuto Advance中はインスペクターを開かない
            if (!autoAdvance && !readAloudSettings.listenOnly) {
              setInspectedIndex(0);
            }
          } else {
            setStatus('incorrect');
          }
        }
      }, [selectedWords, status, currentIndex, questionsQueue, autoAdvance, readAloudSettings.listenOnly]);

      // --- Listen Only (Auto-Solve) Logic ---
      useEffect(() => {
        if (status === 'playing' && readAloudSettings.listenOnly) {
          const currentQuestion = questionsQueue[currentIndex];
          if (currentQuestion) {
            const correctWords = currentQuestion.words.map((word, index) => ({
              id: `w-auto-${index}`,
              text: word,
            }));
            setSelectedWords(correctWords);
            setAvailableWords([]);
          }
        }
      }, [status, currentIndex, readAloudSettings.listenOnly, questionsQueue]);

      // --- Audio Sequence & Auto-advance Logic ---
      useEffect(() => {
        let isMounted = true;

        const handleCompletion = async () => {
          if (status === 'correct' || status === 'resigned') {
            const currentQuestion = questionsQueue[currentIndex];
            if (!currentQuestion) return;

            const completeSentence = currentQuestion.structure.map(s => s.text).join(' ');

            // 音声再生が有効な場合
            if (readAloudSettings.enabled) {
              setIsSpeaking(true);
              
              // 1. 日本語を1回読み上げる
              await speakText(currentQuestion.japanese, 'ja-JP', 1.0);
              if (!isMounted) return;
              
              await new Promise(r => setTimeout(r, 600)); // 少し間を空ける
              if (!isMounted) return;

              // 2. 英語を指定回数読み上げる
              for (let i = 0; i < readAloudSettings.englishRepeat; i++) {
                await speakText(completeSentence, 'en-US', 0.9);
                if (!isMounted) return;
                
                if (i < readAloudSettings.englishRepeat - 1) {
                  await new Promise(r => setTimeout(r, 600)); // 繰り返し間のポーズ
                  if (!isMounted) return;
                }
              }
              setIsSpeaking(false);
            }

            // オートプレイ（SpeedrunまたはListenOnly）が有効な場合、読み上げ完了後に次へ進む
            if (autoAdvance || readAloudSettings.listenOnly) {
              // 音声が無効だった場合は待たずに即時遷移、あった場合は余韻を残す
              setTimeout(() => {
                if (isMounted) handleNextQuestion();
              }, readAloudSettings.enabled ? 800 : 0); 
            }
          }
        };

        handleCompletion();

        // クリーンアップ処理：コンポーネントアンマウント時や問題切り替え時に音声を停止
        return () => {
          isMounted = false;
          window.speechSynthesis.cancel();
          setIsSpeaking(false);
        };
      }, [status, currentIndex, autoAdvance, readAloudSettings, questionsQueue]);

      const setupQuestion = (question: Question) => {
        const wordsObjects = question.words.map((word, index) => ({
          id: `w-${index}`,
          text: word,
        }));
        setAvailableWords(shuffleArray(wordsObjects));
        setSelectedWords([]);
        setStatus('playing');
        setInspectedIndex(null);
      };

      const handleSelectWord = (wordItem: WordItem) => {
        if (status !== 'playing') return;
        setAvailableWords((prev) => prev.filter((w) => w.id !== wordItem.id));
        setSelectedWords((prev) => [...prev, wordItem]);
      };

      const handleDeselectWord = (wordItem: WordItem) => {
        if (status !== 'playing') return;
        setSelectedWords((prev) => prev.filter((w) => w.id !== wordItem.id));
        setAvailableWords((prev) => [...prev, wordItem]);
      };

      const handleResign = () => {
        showConfirm('Are you sure you want to resign this puzzle?', () => {
          const currentQuestion = questionsQueue[currentIndex];
          const correctWords = currentQuestion.words.map((word, index) => ({
            id: `w-auto-${index}`,
            text: word,
          }));
          
          setSelectedWords(correctWords);
          setAvailableWords([]);
          setStatus('resigned');
          if (!readAloudSettings.listenOnly) {
            setInspectedIndex(0);
          }
        });
      };

      const handleResetSelection = () => {
        setupQuestion(questionsQueue[currentIndex]);
      };

      const handleNextQuestion = () => {
        setCurrentIndex((prev) => prev + 1);
      };

      // 手動再生ボタン用の関数
      const handleSpeakManual = (text: string) => {
        if ('speechSynthesis' in window) {
          const cleanText = text.replace(/\s+([.,!?])/g, '$1');
          const utterance = new SpeechSynthesisUtterance(cleanText);
          utterance.lang = 'en-US';
          utterance.rate = 0.9;
          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(utterance);
        } else {
          showAlert('Sorry, your browser does not support text-to-speech.');
        }
      };

      // --- File I/O ---
      const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const json = JSON.parse(e.target?.result as string);
            if (Array.isArray(json) && json.length > 0 && json[0].words && json[0].structure) {
              setQuestionsData(json);
              setStartPosition('1');
              showAlert(`Successfully imported ${json.length} puzzles.`);
              setShowSettings(false);
            } else {
              showAlert('Invalid JSON format. Please check the required structure.');
            }
          } catch (error) {
            showAlert('Failed to parse JSON file.');
          }
          if (fileInputRef.current) fileInputRef.current.value = '';
        };
        reader.readAsText(file);
      };

      const goHome = () => {
        if (gameState === 'playing') {
          showConfirm('Return to home? Current progress will be lost.', () => {
            setGameState('home');
            setShowSettings(false);
            window.speechSynthesis.cancel();
          });
        } else {
          setGameState('home');
          setShowSettings(false);
          window.speechSynthesis.cancel();
        }
      };

      // --- Components ---
      const CustomModal = () => {
        if (!modal.isOpen) return null;
        return (
          <div className="fixed inset-0 bg-black bg-opacity-80 modal-overlay z-[100] flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-lichess-panel border border-lichess-border p-8 rounded-sm shadow-2xl max-w-sm w-full text-center">
              <div className="text-4xl mb-4 text-lichess-text opacity-70">
                {modal.type === 'confirm' ? '⚑' : 'ℹ️'}
              </div>
              <p className="text-white mb-8 text-lg">{modal.message}</p>
              <div className="flex justify-center gap-4">
                {modal.type === 'confirm' && (
                  <button 
                    onClick={() => setModal(m => ({...m, isOpen: false}))} 
                    className="flex-1 py-3 bg-transparent border border-lichess-border text-lichess-text hover:text-white rounded-sm font-bold uppercase tracking-wider transition-colors"
                  >
                    Cancel
                  </button>
                )}
                <button 
                  onClick={modal.onConfirm} 
                  className={`flex-1 py-3 text-white rounded-sm font-bold uppercase tracking-wider transition-colors shadow ${modal.type === 'confirm' ? 'bg-lichess-red hover:bg-red-700' : 'bg-lichess-green hover:bg-lichess-greenHover'}`}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        );
      };

      const Header = () => (
        <header className="bg-lichess-bg border-b border-lichess-border p-3 flex justify-between items-center shadow-md relative z-10">
          <div className="flex items-center text-lichess-text hover:text-lichess-textHover cursor-pointer transition-colors" onClick={goHome}>
            <span className="lichess-icon">♘</span>
            <span className="text-xl font-bold uppercase tracking-wide">GRAMMAR<span className="font-light">PUZZLES</span></span>
          </div>
          <div className="flex items-center gap-4">
            {gameState === 'home' ? (
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className={`text-lichess-text hover:text-white transition-colors p-2 text-lg flex items-center gap-2 rounded-sm px-3 ${showSettings ? 'bg-[#363431]' : ''}`}
                title="Settings & Import"
              >
                <span className="text-sm uppercase font-bold tracking-widest hidden sm:inline">Data</span> ⚙️
              </button>
            ) : (
              <button 
                onClick={goHome}
                className="text-lichess-text hover:text-white transition-colors p-2 text-lg flex items-center gap-2 bg-lichess-button hover:bg-[#4c4a47] rounded-sm px-3 shadow"
                title="Return to Home"
              >
                <span className="text-xs uppercase font-bold tracking-widest">Home</span> 🏠
              </button>
            )}
          </div>
        </header>
      );

      const SettingsOverlay = () => {
        if (!showSettings || gameState !== 'home') return null;
        return (
          <div className="absolute top-14 right-4 bg-lichess-panel border border-lichess-border shadow-2xl rounded-sm p-5 z-50 w-80 animate-fade-in">
            <div className="flex justify-between items-center mb-4 border-b border-lichess-border pb-2">
              <h3 className="text-white font-bold uppercase tracking-wide text-sm">Data Settings</h3>
              <button onClick={() => setShowSettings(false)} className="text-lichess-text hover:text-white text-xl">✕</button>
            </div>
            
            <div className="mb-4">
              <p className="text-xs text-lichess-text mb-2">Import your JSON puzzle collection.</p>
              <input type="file" accept=".json" onChange={handleFileUpload} ref={fileInputRef} className="hidden" id="json-upload" />
              <label htmlFor="json-upload" className="block w-full text-center py-3 bg-[#3e3c38] hover:bg-[#4c4a47] border border-lichess-border text-white text-sm font-bold uppercase tracking-wider rounded-sm cursor-pointer transition-colors shadow">
                Upload JSON File
              </label>
            </div>
            
            <div className="text-xs text-lichess-text pt-2 border-t border-lichess-border text-center flex justify-between items-center mt-4">
              <span>Loaded Puzzles:</span>
              <span className="text-lichess-green font-bold text-sm bg-[#161512] px-2 py-0.5 rounded-sm border border-lichess-border">{questionsData.length}</span>
            </div>
          </div>
        );
      };

      // === HOME VIEW ===
      if (gameState === 'home') {
        return (
          <>
            <CustomModal />
            <SettingsOverlay />
            <div className="h-screen flex bg-[#161512]">
              <div className="w-full mx-auto flex flex-col bg-[#262421] overflow-hidden h-screen">
                {/* Title bar */}
                <div className="h-12 bg-[#1b1a19] border-b border-[#383634] flex items-center justify-between px-4 shrink-0">
                  <div className="font-bold text-[#dbd9d6] flex items-center gap-2">
                    <span className="text-[#8c8c8c]">♘</span>
                    Grammar_Puzzle
                  </div>
                  <div className="flex gap-3 text-[#8c8c8c]">
                    <button
                      onClick={() => setShowSettings(!showSettings)}
                      className={`hover:text-white transition-colors ${showSettings ? 'text-white' : ''}`}
                      title="Settings & Import"
                    >
                      ⚙️
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center py-6 px-4 sm:justify-center sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full">
                  <div className="text-center space-y-2 shrink-0">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-wider text-[#dbd9d6]">GRAMMAR PUZZLE</h1>
                    <p className="text-[#8c8c8c] text-sm">{questionsData.length} puzzles loaded in database</p>
                  </div>

                  <div className="w-full max-w-sm space-y-6 pt-2 pb-6 shrink-0">
                    <div className="space-y-4 bg-[#1b1a19] p-4 rounded-sm border border-[#383634]">

                      {/* Play Mode */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#8c8c8c] uppercase">
                          ▶ Play Mode
                        </div>
                        <div className="flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]">
                          <button
                            onClick={() => setPlayMode('random')}
                            className={`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${playMode === 'random' ? 'bg-[#383634] text-white shadow-sm' : 'text-[#8c8c8c] hover:text-[#dbd9d6]'}`}
                          >
                            Random
                          </button>
                          <button
                            onClick={() => setPlayMode('sequential')}
                            className={`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${playMode === 'sequential' ? 'bg-[#383634] text-white shadow-sm' : 'text-[#8c8c8c] hover:text-[#dbd9d6]'}`}
                          >
                            Sequential
                          </button>
                        </div>

                        {playMode === 'sequential' && (
                          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[#262421]">
                            <span className="text-xs font-bold text-[#8c8c8c] uppercase flex items-center gap-1">
                              Start At:
                            </span>
                            <input
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              value={startPosition}
                              onChange={(e) => {
                                const val = e.target.value.replace(/[^0-9]/g, '');
                                setStartPosition(val);
                              }}
                              onBlur={() => {
                                let val = parseInt(startPosition, 10);
                                if (isNaN(val) || val < 1) val = 1;
                                if (val > questionsData.length) val = questionsData.length;
                                setStartPosition(val.toString());
                              }}
                              placeholder="1"
                              className="bg-[#262421] border border-[#383634] text-[#dbd9d6] text-xs px-2 py-1.5 rounded-sm w-20 text-center focus:outline-none focus:border-[#8c8c8c] placeholder:text-[#8c8c8c] placeholder:opacity-50 transition-colors"
                            />
                            <span className="text-[#8c8c8c] text-xs">/ {questionsData.length}</span>
                          </div>
                        )}
                      </div>

                      {/* Evaluation Mode */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#8c8c8c] uppercase">
                          ⚡ Evaluation
                        </div>
                        <div className="flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]">
                          <button
                            onClick={() => setAutoAdvance(false)}
                            className={`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${!autoAdvance ? 'bg-[#383634] text-white shadow-sm' : 'text-[#8c8c8c] hover:text-[#dbd9d6]'}`}
                          >
                            Manual
                          </button>
                          <button
                            onClick={() => setAutoAdvance(true)}
                            className={`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${autoAdvance ? 'bg-[#383634] text-white shadow-sm' : 'text-[#8c8c8c] hover:text-[#dbd9d6]'}`}
                          >
                            Speed Run
                          </button>
                        </div>
                      </div>

                      {/* Read-Aloud Mode */}
                      <div className="space-y-2 pt-2 border-t border-[#262421]">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#8c8c8c] uppercase">
                          🔊 Read-Aloud
                        </div>
                        <div className="flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]">
                          <button
                            onClick={() => setReadAloudSettings(prev => ({...prev, enabled: false}))}
                            className={`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${!readAloudSettings.enabled ? 'bg-[#383634] text-white shadow-sm' : 'text-[#8c8c8c] hover:text-[#dbd9d6]'}`}
                          >
                            OFF
                          </button>
                          <button
                            onClick={() => setReadAloudSettings(prev => ({...prev, enabled: true}))}
                            className={`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${readAloudSettings.enabled ? 'bg-[#383634] text-white shadow-sm' : 'text-[#8c8c8c] hover:text-[#dbd9d6]'}`}
                          >
                            ON
                          </button>
                        </div>

                        {readAloudSettings.enabled && (
                          <div className="space-y-2 mt-2 pt-2 border-t border-[#262421]">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#8c8c8c] uppercase">EN Repeats</span>
                              <select
                                value={readAloudSettings.englishRepeat}
                                onChange={(e) => setReadAloudSettings(prev => ({...prev, englishRepeat: Number(e.target.value)}))}
                                className="bg-[#262421] border border-[#383634] text-[#dbd9d6] text-xs rounded-sm py-1 px-2 focus:outline-none focus:border-[#8c8c8c] transition-colors"
                              >
                                {[1, 2, 3, 4, 5].map(n => (
                                  <option key={n} value={n}>{n}x</option>
                                ))}
                              </select>
                            </div>
                            <div className="flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]">
                              <button
                                onClick={() => setReadAloudSettings(prev => ({...prev, listenOnly: false}))}
                                className={`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${!readAloudSettings.listenOnly ? 'bg-[#383634] text-white shadow-sm' : 'text-[#8c8c8c] hover:text-[#dbd9d6]'}`}
                              >
                                Normal
                              </button>
                              <button
                                onClick={() => setReadAloudSettings(prev => ({...prev, listenOnly: true}))}
                                className={`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${readAloudSettings.listenOnly ? 'bg-[#383634] text-white shadow-sm' : 'text-[#8c8c8c] hover:text-[#dbd9d6]'}`}
                              >
                                Listen Only
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>

                    {/* Start Button */}
                    <button
                      onClick={startPuzzles}
                      className="w-full py-4 text-sm sm:text-base bg-[#629924] text-white hover:bg-[#72a332] font-bold rounded-sm uppercase tracking-wide transition-colors shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2"
                    >
                      ▶ Play Puzzles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }

      // === FINISHED VIEW ===
      if (gameState === 'finished') {
        return (
          <>
            <CustomModal />
            <Header />
            <div className="flex-grow flex items-center justify-center p-4">
              <div className="bg-lichess-panel border border-lichess-border rounded-sm p-8 text-center max-w-md w-full shadow-lg animate-fade-in">
                <div className="text-5xl mb-4 text-lichess-green">🏆</div>
                <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Course Completed</h2>
                <p className="text-lichess-text mb-8">お疲れ様でした！すべての構文解析を完了しました。</p>
                <button onClick={goHome} className="w-full py-3 bg-lichess-button hover:bg-lichess-buttonHover border border-lichess-border text-white font-bold rounded-sm uppercase tracking-wider transition-colors shadow">
                  Return to Main Menu
                </button>
              </div>
            </div>
          </>
        );
      }

      // === PLAYING VIEW ===
      const currentQuestion = questionsQueue[currentIndex];
      if (!currentQuestion) return null;
      
      const isShowingInspector = (status === 'correct' && !autoAdvance && !readAloudSettings.listenOnly) || status === 'resigned';
      const completeSentence = currentQuestion.structure.map(s => s.text).join(' ');

      return (
        <>
          <CustomModal />
          <Header />
          <div className="w-full p-4 md:p-6 no-select flex-grow flex flex-col relative z-0 overflow-y-auto">
            
            <div className="flex justify-between items-center mb-4 text-sm text-lichess-text">
              <div className="uppercase font-bold tracking-wider text-xs opacity-70 flex items-center gap-3">
                <span>Problem {currentIndex + 1} / {questionsQueue.length}</span>
                {isSpeaking && <span className="text-lichess-green animate-pulse flex items-center gap-1">🔊 <span className="hidden sm:inline">Playing Audio</span></span>}
              </div>
              <div className="uppercase font-bold tracking-wider text-xs opacity-50 flex items-center gap-2">
                <span>{playMode}</span>
                <span className="opacity-50">|</span>
                <span className={autoAdvance ? 'text-lichess-green' : ''}>
                  {readAloudSettings.listenOnly ? 'Listen Only' : (autoAdvance ? 'Auto' : 'Manual')}
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* --- Left Side: Main Board --- */}
              <div className="flex-grow flex flex-col gap-6 lg:w-2/3">
                <div className="bg-lichess-panel border border-lichess-border rounded-sm p-6 shadow-lg relative min-h-[400px]">
                  
                  {status === 'resigned' && (
                    <div className="absolute top-4 right-4 border-2 border-lichess-red text-lichess-red px-3 py-1 text-sm font-bold uppercase tracking-widest rounded-sm opacity-80 rotate-12 pointer-events-none z-10">
                      Resigned
                    </div>
                  )}

                  <div className="mb-6 border-b border-lichess-border pb-4">
                    <p className="text-xl md:text-2xl text-white font-medium mb-1 tracking-wide leading-relaxed">
                      {currentQuestion.japanese}
                    </p>
                  </div>

                  {}
                  {/* Playing Area */}
                  {!isShowingInspector && (
                    <div className="animate-fade-in">
                      <div className="mb-6">
                        {/* Speedrun/ListenOnly時は枠を緑にしないための分岐 */}
                        <div className={`min-h-[80px] border rounded-sm p-3 flex flex-wrap gap-2 items-center transition-colors duration-200 ${(status === 'correct' || ((status as string) === 'resigned' && readAloudSettings.listenOnly)) && !autoAdvance && !readAloudSettings.listenOnly ? 'bg-lichess-green border-lichess-green bg-opacity-20' : 'bg-lichess-bg border-lichess-border'}`}>
                          {selectedWords.length === 0 ? (
                            <span className="text-lichess-text opacity-40 text-sm w-full text-center py-2 uppercase tracking-widest">
                              Construct the sentence
                            </span>
                          ) : (
                            selectedWords.map((word) => (
                              <button
                                key={word.id}
                                onClick={() => handleDeselectWord(word)}
                                className={`px-4 py-2 rounded-sm font-medium shadow text-lg transition-colors ${status === 'correct' || ((status as string) === 'resigned' && readAloudSettings.listenOnly) ? 'bg-lichess-green text-white cursor-default' : 'bg-lichess-button hover:bg-lichess-buttonHover text-white'}`}
                                disabled={status !== 'playing'}
                              >
                                {word.text}
                              </button>
                            ))
                          )}
                        </div>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-2 min-h-[60px]">
                          {availableWords.map((word) => (
                            <button
                              key={word.id}
                              onClick={() => handleSelectWord(word)}
                              className="px-4 py-2 bg-[#3e3c38] hover:bg-[#52504c] text-white rounded-sm font-medium shadow-sm text-lg transition-colors active:translate-y-[1px]"
                            >
                              {word.text}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {}
                  {/* SYNTAX ANALYSIS & INSPECTOR */}
                  {isShowingInspector && (
                    <div className="animate-fade-in flex flex-col h-full">
                      
                      <div className="mb-5 p-4 bg-[#1b1a18] border border-[#3e3c38] rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between shadow-inner gap-4">
                        <div className="text-xl text-white font-serif italic tracking-wide leading-relaxed">
                          {completeSentence}
                        </div>
                        <button 
                          onClick={() => handleSpeakManual(completeSentence)}
                          className={`flex-shrink-0 bg-lichess-button hover:bg-[#4c4a47] text-white px-4 py-2 rounded-sm border border-[#4c4a47] transition-colors flex items-center gap-2 w-full md:w-auto justify-center ${isSpeaking ? 'opacity-50 cursor-not-allowed' : ''}`}
                          disabled={isSpeaking}
                        >
                          <span className="text-lg">🔊</span> 
                          <span className="text-xs uppercase font-bold tracking-widest">Listen</span>
                        </button>
                      </div>

                      <div className="bg-[#1b1a18] p-4 border border-[#3e3c38] rounded-sm shadow-inner mb-4">
                        <div className="text-xs uppercase font-bold tracking-widest text-lichess-green mb-4 flex justify-between items-center">
                          <span>Syntax Analysis</span>
                          <span className="text-lichess-text opacity-50 font-normal normal-case">Click to inspect</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          {currentQuestion.structure.map((item, idx) => {
                            const isSelected = inspectedIndex === idx;
                            return (
                              <div 
                                key={idx} 
                                onClick={() => setInspectedIndex(idx)}
                                className={`
                                  flex flex-col items-center p-2 rounded-sm cursor-pointer transition-all border-2
                                  ${isSelected ? `bg-[#2a2825] ${getRoleBorderClass(item.role)} shadow-lg scale-105` : 'border-transparent hover:bg-[#262421]'}
                                  ${!isSelected && idx === 0 && inspectedIndex === null ? 'inspector-hint' : ''}
                                `}
                              >
                                <div className={`text-lg mb-2 font-medium ${isSelected ? 'text-white' : 'text-lichess-text'}`}>
                                  {item.text}
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                  <span className={`px-2 py-0.5 text-[11px] font-bold rounded-sm tracking-widest ${getRoleColorClass(item.role)}`}>
                                    {item.role}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="bg-lichess-bg border-l-4 border-lichess-green p-5 rounded-r-sm relative overflow-hidden flex-grow">
                        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                          <span className="text-9xl font-bold">⚙</span>
                        </div>
                        
                        <h4 className="text-sm uppercase font-bold text-lichess-text tracking-widest mb-3">Inspector</h4>
                        
                        {inspectedIndex !== null && currentQuestion.structure[inspectedIndex] ? (
                          <div className="relative z-10 animate-fade-in">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <span className={`px-3 py-1 text-sm font-bold rounded-sm ${getRoleColorClass(currentQuestion.structure[inspectedIndex].role)}`}>
                                {getRoleFullName(currentQuestion.structure[inspectedIndex].role)}
                              </span>
                              {currentQuestion.structure[inspectedIndex].detail && (
                                <span className="text-white text-sm font-medium border-b border-gray-600 pb-0.5">
                                  {currentQuestion.structure[inspectedIndex].detail}
                                </span>
                              )}
                            </div>
                            <p className="text-lg text-white mb-3 mt-4 font-serif italic border-l-2 border-lichess-border pl-3">
                              "{currentQuestion.structure[inspectedIndex].text}"
                            </p>
                            <p className="text-lichess-text leading-relaxed text-sm md:text-base">
                              {currentQuestion.structure[inspectedIndex].explanation || '詳しい解説はありません。'}
                            </p>
                          </div>
                        ) : (
                          <p className="text-lichess-text opacity-50 text-sm">Select an element above to view detailed grammar analysis.</p>
                        )}

                        {currentQuestion.overallExplanation && (
                          <div className="mt-6 pt-4 border-t border-lichess-border">
                            <span className="text-xs uppercase font-bold text-lichess-text tracking-wider mr-2">Pattern {currentQuestion.pattern}:</span>
                            <span className="text-sm text-lichess-textHover leading-relaxed block mt-1">{currentQuestion.overallExplanation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {}
              {/* --- Right Side: Control Panel --- */}
              <div className="lg:w-1/3 flex flex-col gap-4">
                <div className="bg-lichess-panel border border-lichess-border rounded-sm p-4 shadow-lg flex flex-col justify-center min-h-[160px]">
                  
                  {/* Speedrun/ListenOnly等で状態が変わった際もコントロールを維持 */}
                  {(status === 'playing' || status === 'correct' || (status === 'resigned' && readAloudSettings.listenOnly)) && (autoAdvance || readAloudSettings.listenOnly || status === 'playing') && (
                    <div className="flex flex-col gap-3">
                      <div className="text-center text-lichess-text opacity-70 text-sm mb-1 uppercase tracking-widest">
                        {selectedWords.length} / {currentQuestion.words.length} Selected
                      </div>
                      
                      <button
                        onClick={status === 'playing' && !readAloudSettings.listenOnly ? handleResign : undefined}
                        className={`w-full py-4 bg-transparent border border-lichess-border text-lichess-text rounded-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${status === 'playing' && !readAloudSettings.listenOnly ? 'hover:bg-[#363431] hover:text-white cursor-pointer' : 'opacity-50 cursor-default'}`}
                        title={status === 'playing' ? "Give up and show solution" : ""}
                      >
                        <span className="text-lg leading-none">⚑</span> Resign
                      </button>
                    </div>
                  )}

                  {status === 'correct' && !autoAdvance && !readAloudSettings.listenOnly && (
                    <div className="text-center animate-fade-in">
                      <div className="text-lg font-bold text-lichess-green mb-4 uppercase tracking-widest flex items-center justify-center gap-2">
                        <span>✓</span> Correct Syntax
                      </div>
                      <button
                        onClick={handleNextQuestion}
                        className="w-full py-4 bg-[#3e3c38] hover:bg-[#52504c] border border-[#52504c] text-white rounded-sm font-bold uppercase tracking-widest transition-colors shadow"
                      >
                        Next Problem ❯
                      </button>
                    </div>
                  )}

                  {status === 'resigned' && !readAloudSettings.listenOnly && (
                    <div className="text-center animate-fade-in">
                      <div className="text-sm font-bold text-lichess-text mb-4 uppercase tracking-widest flex items-center justify-center gap-2 opacity-80">
                        <span>⚑</span> You Resigned
                      </div>
                      <button
                        onClick={handleNextQuestion}
                        className="w-full py-4 bg-lichess-button hover:bg-[#4c4a47] border border-lichess-border text-white rounded-sm font-bold uppercase tracking-widest transition-colors shadow"
                      >
                        Next Problem ❯
                      </button>
                    </div>
                  )}

                  {status === 'incorrect' && (
                    <div className="text-center animate-fade-in">
                      <div className="text-lg font-bold text-lichess-red mb-4 uppercase tracking-widest">
                        Blunder
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={handleResetSelection}
                          className="flex-1 py-3 bg-lichess-button hover:bg-[#4c4a47] border border-lichess-border text-white rounded-sm font-bold uppercase tracking-wider transition-colors"
                        >
                          Retry
                        </button>
                        <button
                          onClick={handleResign}
                          className="px-4 py-3 bg-transparent border border-lichess-border hover:bg-[#363431] text-lichess-red hover:text-white hover:bg-lichess-red rounded-sm font-bold transition-colors"
                          title="Resign"
                        >
                          ⚑
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Legend Panel */}
                <div className="hidden lg:block bg-lichess-panel border border-lichess-border rounded-sm p-4">
                  <div className="text-[10px] uppercase font-bold text-center tracking-widest text-lichess-text border-b border-lichess-border pb-2 mb-3">
                    Syntax Legend
                  </div>
                  <div className="flex flex-col gap-2 text-xs text-lichess-text">
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-lichess-roleS"></span> <span className="w-6 font-bold">S</span> Subject</div>
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-lichess-roleV"></span> <span className="w-6 font-bold">V</span> Verb</div>
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-lichess-roleO"></span> <span className="w-6 font-bold">O</span> Object</div>
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-lichess-roleC"></span> <span className="w-6 font-bold">C</span> Complement</div>
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-lichess-roleM"></span> <span className="w-6 font-bold">M</span> Modifier</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </>
      );
    }

    export default App;
  