import { Injectable } from '@angular/core';
import { Task, WeekTemplate } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class DbService {
  private dbName = 'WeeklyRoutineDB';
  private dbVersion = 1;
  private db: IDBDatabase | null = null;

  private async getDb(): Promise<IDBDatabase> {
    if (this.db) return this.db;

    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.dbName, this.dbVersion);

      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains('tasks')) {
          const store = db.createObjectStore('tasks', { keyPath: 'id' });
          store.createIndex('weekStartDate', 'weekStartDate', { unique: false });
          store.createIndex('weekDay', ['weekStartDate', 'dayOfWeek'], { unique: false });
        }
        if (!db.objectStoreNames.contains('templates')) {
          db.createObjectStore('templates', { keyPath: 'id' });
        }
      };

      req.onsuccess = () => {
        this.db = req.result;
        resolve(this.db);
      };
      req.onerror = () => reject(req.error);
    });
  }

  private async tx<T>(
    storeName: string,
    mode: IDBTransactionMode,
    fn: (store: IDBObjectStore) => IDBRequest<T>
  ): Promise<T> {
    const db = await this.getDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, mode);
      const store = tx.objectStore(storeName);
      const req = fn(store);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  private async getAll<T>(storeName: string, indexName?: string, query?: IDBValidKey | IDBKeyRange): Promise<T[]> {
    const db = await this.getDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const source = indexName ? store.index(indexName) : store;
      const req = query ? source.getAll(query) : source.getAll();
      req.onsuccess = () => resolve(req.result as T[]);
      req.onerror = () => reject(req.error);
    });
  }

  async getTasksForWeek(weekStartDate: string): Promise<Task[]> {
    const tasks = await this.getAll<Task>('tasks', 'weekStartDate', weekStartDate);
    return tasks.sort((a, b) => a.order - b.order);
  }

  async getTasksForDay(weekStartDate: string, dayOfWeek: number): Promise<Task[]> {
    const tasks = await this.getAll<Task>('tasks', 'weekDay', [weekStartDate, dayOfWeek]);
    return tasks.sort((a, b) => a.order - b.order);
  }

  async addTask(task: Task): Promise<void> {
    await this.tx('tasks', 'readwrite', (store) => store.add(task));
  }

  async updateTask(id: string, changes: Partial<Task>): Promise<void> {
    const db = await this.getDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('tasks', 'readwrite');
      const store = tx.objectStore('tasks');
      const getReq = store.get(id);
      getReq.onsuccess = () => {
        const existing = getReq.result;
        if (existing) {
          const updated = { ...existing, ...changes };
          const putReq = store.put(updated);
          putReq.onsuccess = () => resolve();
          putReq.onerror = () => reject(putReq.error);
        } else {
          resolve();
        }
      };
      getReq.onerror = () => reject(getReq.error);
    });
  }

  async deleteTask(id: string): Promise<void> {
    await this.tx('tasks', 'readwrite', (store) => store.delete(id));
  }

  async toggleTask(id: string): Promise<void> {
    const db = await this.getDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('tasks', 'readwrite');
      const store = tx.objectStore('tasks');
      const getReq = store.get(id);
      getReq.onsuccess = () => {
        const task = getReq.result as Task | undefined;
        if (task) {
          task.completed = !task.completed;
          const putReq = store.put(task);
          putReq.onsuccess = () => resolve();
          putReq.onerror = () => reject(putReq.error);
        } else {
          resolve();
        }
      };
      getReq.onerror = () => reject(getReq.error);
    });
  }

  async getRecurringTasks(): Promise<Task[]> {
    const allTasks = await this.getAll<Task>('tasks');
    return allTasks.filter((t) => t.isRecurring);
  }

  async generateWeekFromRecurring(weekStartDate: string): Promise<void> {
    const existing = await this.getTasksForWeek(weekStartDate);
    if (existing.length > 0) return;

    const recurring = await this.getRecurringTasks();
    if (recurring.length === 0) return;

    const seen = new Set<string>();
    const db = await this.getDb();
    const tx = db.transaction('tasks', 'readwrite');
    const store = tx.objectStore('tasks');

    for (const task of recurring) {
      const key = `${task.dayOfWeek}-${task.title}-${task.time ?? ''}`;
      if (seen.has(key)) continue;
      seen.add(key);

      const newTask: Task = {
        ...task,
        id: crypto.randomUUID(),
        weekStartDate,
        completed: false,
      };
      store.add(newTask);
    }

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  async getAllTemplates(): Promise<WeekTemplate[]> {
    return this.getAll<WeekTemplate>('templates');
  }

  async addTemplate(template: WeekTemplate): Promise<void> {
    await this.tx('templates', 'readwrite', (store) => store.add(template));
  }

  async deleteTemplate(id: string): Promise<void> {
    await this.tx('templates', 'readwrite', (store) => store.delete(id));
  }

  async applyTemplate(template: WeekTemplate, weekStartDate: string): Promise<void> {
    const db = await this.getDb();
    const tx = db.transaction('tasks', 'readwrite');
    const store = tx.objectStore('tasks');

    for (const t of template.tasks) {
      const task: Task = {
        ...t,
        id: crypto.randomUUID(),
        weekStartDate,
        completed: false,
      };
      store.add(task);
    }

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  async getNextOrder(weekStartDate: string, dayOfWeek: number): Promise<number> {
    const tasks = await this.getTasksForDay(weekStartDate, dayOfWeek);
    return tasks.length > 0 ? Math.max(...tasks.map((t) => t.order)) + 1 : 0;
  }
}
