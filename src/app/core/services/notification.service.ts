import { Injectable } from '@angular/core';

const DIGEST_STORAGE_KEY = 'weeklyRoutine_lastDigestDate';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private permission: NotificationPermission = 'default';

  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) return false;
    this.permission = await Notification.requestPermission();
    return this.permission === 'granted';
  }

  notify(title: string, body: string): void {
    if (this.permission !== 'granted') return;
    try {
      new Notification(title, {
        body,
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        tag: 'weekly-routine',
      });
    } catch {
      // Alguns entorns no permeten Notification
    }
  }

  scheduleReminder(title: string, time: string, delayMs: number): number {
    return window.setTimeout(() => {
      this.notify('Recordatori', `${time} - ${title}`);
    }, delayMs);
  }

  /** Notificació de tasques pendents (màx 1 per dia quan obres l’app) */
  maybeSendDailyDigest(pendingCount: number): void {
    if (pendingCount === 0) return;
    if (this.permission !== 'granted') return;
    const today = new Date().toDateString();
    try {
      const last = localStorage.getItem(DIGEST_STORAGE_KEY);
      if (last === today) return;
      localStorage.setItem(DIGEST_STORAGE_KEY, today);
      this.notify(
        'Tasques pendents',
        `Tens ${pendingCount} tasca${pendingCount > 1 ? 's' : ''} pendent${pendingCount > 1 ? 's' : ''} avui`
      );
    } catch {
      this.notifyPendingTasks(pendingCount);
    }
  }

  notifyPendingTasks(count: number): void {
    if (count === 0) return;
    this.notify(
      'Tasques pendents',
      `Tens ${count} tasca${count > 1 ? 's' : ''} pendent${count > 1 ? 's' : ''} avui`
    );
  }
}
