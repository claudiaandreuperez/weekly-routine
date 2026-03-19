import { Injectable, NgZone, signal, computed, inject } from '@angular/core';
import { DbService } from './db.service';
import { Task } from '../models/task.model';
import {
  getMonday,
  formatWeekStart,
  addWeeks,
  getTodayDayOfWeek,
} from '@shared/utils/date.utils';

@Injectable({ providedIn: 'root' })
export class WeekService {
  private zone = inject(NgZone);
  private currentMonday = signal<Date>(getMonday());
  readonly weekStartDate = computed(() => formatWeekStart(this.currentMonday()));
  readonly mondayDate = this.currentMonday.asReadonly();
  readonly tasks = signal<Task[]>([]);

  readonly todayDayOfWeek = signal(getTodayDayOfWeek());
  readonly todayTasks = computed(() =>
    this.tasks()
      .filter((t) => t.dayOfWeek === this.todayDayOfWeek())
      .sort((a, b) => {
        if (a.time && b.time) return a.time.localeCompare(b.time);
        if (a.time) return -1;
        if (b.time) return 1;
        return a.order - b.order;
      })
  );

  readonly todayCompleted = computed(() => this.todayTasks().filter((t) => t.completed).length);
  readonly todayTotal = computed(() => this.todayTasks().length);
  readonly todayProgress = computed(() => {
    const total = this.todayTotal();
    return total === 0 ? 0 : this.todayCompleted() / total;
  });

  constructor(private db: DbService) {}

  async loadWeek(): Promise<void> {
    const weekStart = this.weekStartDate();
    await this.db.generateWeekFromRecurring(weekStart);
    const tasks = await this.db.getTasksForWeek(weekStart);
    this.zone.run(() => this.tasks.set(tasks));
  }

  async nextWeek(): Promise<void> {
    this.currentMonday.update((d) => addWeeks(d, 1));
    await this.loadWeek();
  }

  async prevWeek(): Promise<void> {
    this.currentMonday.update((d) => addWeeks(d, -1));
    await this.loadWeek();
  }

  async goToCurrentWeek(): Promise<void> {
    this.currentMonday.set(getMonday());
    this.todayDayOfWeek.set(getTodayDayOfWeek());
    await this.loadWeek();
  }

  async toggleTask(id: string): Promise<void> {
    await this.db.toggleTask(id);
    await this.loadWeek();
  }

  async addTask(task: Task): Promise<void> {
    await this.db.addTask(task);
    await this.loadWeek();
  }

  async updateTask(id: string, changes: Partial<Task>): Promise<void> {
    await this.db.updateTask(id, changes);
    await this.loadWeek();
  }

  async deleteTask(id: string): Promise<void> {
    await this.db.deleteTask(id);
    await this.loadWeek();
  }

  getTasksForDay(dayOfWeek: number): Task[] {
    return this.tasks()
      .filter((t) => t.dayOfWeek === dayOfWeek)
      .sort((a, b) => {
        if (a.time && b.time) return a.time.localeCompare(b.time);
        if (a.time) return -1;
        if (b.time) return 1;
        return a.order - b.order;
      });
  }

  getDayProgress(dayOfWeek: number): { completed: number; total: number } {
    const dayTasks = this.getTasksForDay(dayOfWeek);
    return {
      completed: dayTasks.filter((t) => t.completed).length,
      total: dayTasks.length,
    };
  }

  async getNextOrder(dayOfWeek: number): Promise<number> {
    return this.db.getNextOrder(this.weekStartDate(), dayOfWeek);
  }
}
