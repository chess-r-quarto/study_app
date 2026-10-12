// IndexedDB persistence (same DB/store names as the prototype pm2.html).
import type { ProjectData, Snapshot } from './types';

const DB_NAME = 'GovProjectManagerDB';
const DB_VERSION = 1;

/** localStorage key used by the earlier simplified React version (migrated once). */
export const LEGACY_LS_KEY = 'gov_local_pm_state';

const reqToPromise = <T>(req: IDBRequest<T>) =>
  new Promise<T>((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });

export class StorageService {
  private db: IDBDatabase | null = null;

  async init(): Promise<IDBDatabase> {
    if (this.db) return this.db;
    this.db = await new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains('current_project')) {
          db.createObjectStore('current_project', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('snapshots')) {
          db.createObjectStore('snapshots', { keyPath: 'snapshotId' });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    return this.db;
  }

  private async store(name: 'current_project' | 'snapshots', mode: IDBTransactionMode) {
    const db = await this.init();
    return db.transaction(name, mode).objectStore(name);
  }

  async saveCurrentProject(project: ProjectData): Promise<void> {
    const store = await this.store('current_project', 'readwrite');
    await reqToPromise(store.put({ id: 'active_project', project, savedAt: new Date().toISOString() }));
  }

  async loadCurrentProject(): Promise<ProjectData | null> {
    const store = await this.store('current_project', 'readonly');
    const res = await reqToPromise(store.get('active_project'));
    return res ? (res.project as ProjectData) : null;
  }

  async saveSnapshot(project: ProjectData, memo = ''): Promise<Snapshot> {
    const snapshot: Snapshot = {
      snapshotId: 'snap_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      createdAt: new Date().toISOString(),
      projectName: project.metadata.projectName || '名称未定',
      memo: memo || '手動保存スナップショット',
      projectData: JSON.parse(JSON.stringify(project))
    };
    const store = await this.store('snapshots', 'readwrite');
    await reqToPromise(store.add(snapshot));
    return snapshot;
  }

  async getSnapshots(): Promise<Snapshot[]> {
    const store = await this.store('snapshots', 'readonly');
    const list = ((await reqToPromise(store.getAll())) || []) as Snapshot[];
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return list.slice(0, 30);
  }

  async deleteSnapshot(snapshotId: string): Promise<void> {
    const store = await this.store('snapshots', 'readwrite');
    await reqToPromise(store.delete(snapshotId));
  }

  async clearAll(): Promise<void> {
    const db = await this.init();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(['current_project', 'snapshots'], 'readwrite');
      tx.objectStore('current_project').clear();
      tx.objectStore('snapshots').clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    try {
      localStorage.removeItem(LEGACY_LS_KEY);
    } catch {
      // ignore
    }
  }

  async getStorageEstimate(): Promise<string> {
    if (navigator.storage && navigator.storage.estimate) {
      const est = await navigator.storage.estimate();
      const usedKB = Math.round((est.usage || 0) / 1024);
      return `${usedKB} KB 使用中 (端末内IndexedDB)`;
    }
    return '利用可能 (端末内IndexedDB)';
  }
}
