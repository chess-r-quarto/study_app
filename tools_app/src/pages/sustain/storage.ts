import { SustainState, ThemeMode } from './types';
import { SAMPLE_STATE } from './sampleData';

const STORAGE_KEY = 'sust_strategy_state';
const THEME_KEY = 'theme_pref';

export function loadSustainState(): SustainState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.concept && parsed.fourP && parsed.tlbmc) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to load sustain state from localStorage', e);
  }
  return SAMPLE_STATE;
}

export function saveSustainState(state: SustainState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save sustain state to localStorage', e);
  }
}

export function getInitialTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
  } catch {
    // ignore
  }
  return 'dark'; // デフォルトはダーク
}

export function saveThemePref(mode: ThemeMode): void {
  try {
    localStorage.setItem(THEME_KEY, mode);
  } catch (e) {
    console.error('Failed to save theme pref', e);
  }
}

export function exportSustainJSON(state: SustainState): void {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement('a');
  const sanitizedName = (state.concept.name || 'eval').replace(/\s+/g, '_');
  const filename = `sustainable_strategy_${sanitizedName}_${new Date().toISOString().slice(0, 10)}.json`;
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", filename);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}
