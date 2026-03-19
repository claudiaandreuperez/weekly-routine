import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekService } from '@core/services/week.service';
import { Task, DAY_NAMES } from '@core/models/task.model';
import { FabButtonComponent } from '@shared/components/ui/fab-button/fab-button.component';
import { TaskFormComponent } from '@shared/components/forms/task-form/task-form.component';
import { TaskCardComponent } from '../task-card/task-card.component';
import {
  formatWeekRange,
  isCurrentWeek,
  getTodayDayOfWeek,
  addDays,
  formatDateShort,
  parseLocalDate,
} from '@shared/utils/date.utils';

@Component({
  selector: 'app-week-calendar',
  standalone: true,
  imports: [CommonModule, TaskCardComponent, FabButtonComponent, TaskFormComponent],
  template: `
    <div class="week-page">
      <header class="header">
        <button class="nav-btn" (click)="prevWeek()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div class="week-label" (click)="goToday()">
          <h1>{{ weekRange }}</h1>
          @if (!isCurrent) {
            <span class="today-link">Anar a avui</span>
          }
        </div>
        <button class="nav-btn" (click)="nextWeek()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </header>

      <div class="day-list">
        @for (dayIdx of days; track dayIdx) {
          @let dayTasks = week.getTasksForDay(dayIdx);
          @let progress = week.getDayProgress(dayIdx);
          @let isOpen = isDayExpanded(dayIdx);
          <section class="day-item" [class.today]="isCurrent && dayIdx === todayIdx">
            <button
              type="button"
              class="day-header"
              (click)="toggleDay(dayIdx)"
            >
              <div class="day-header-left">
                <span class="day-name">{{ dayLabels[dayIdx] }}</span>
                <span class="day-date">{{ getDateStr(dayIdx) }}</span>
                @if (dayTasks.length > 0) {
                  <span class="day-progress">{{ progress.completed }}/{{ progress.total }}</span>
                }
              </div>
              <svg
                class="chevron"
                [class.open]="isOpen"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            @if (isOpen) {
              <div class="day-body">
                @if (dayTasks.length === 0) {
                  <p class="no-tasks">Sense tasques</p>
                } @else {
                  <div class="task-list">
                    @for (task of dayTasks; track task.id) {
                      <app-task-card
                        [task]="task"
                        (toggle)="onToggle($event)"
                        (edit)="onEdit($event)"
                      />
                    }
                  </div>
                }
              </div>
            }
          </section>
        }
      </div>
    </div>

    <app-fab-button (fabClick)="showForm.set(true)" />

    <app-task-form
      [visible]="showForm()"
      [editTask]="editingTask()"
      [defaultDay]="selectedDay()"
      (close)="closeForm()"
      (saveTask)="onSaveTask($event)"
    />
  `,
  styles: `
    .week-page {
      padding-top: calc(var(--safe-top) + 8px);
      padding-bottom: 24px;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
    }

    .nav-btn {
      min-width: 44px;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: background 0.2s;

      svg {
        width: 22px;
        height: 22px;
      }

      &:active {
        background: var(--bg-surface);
      }
    }

    .week-label {
      text-align: center;
      cursor: pointer;

      h1 {
        font-size: 17px;
        font-weight: 700;
      }

      .today-link {
        font-size: 12px;
        color: var(--primary);
        font-weight: 500;
      }
    }

    .day-list {
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .day-item {
      background: var(--bg-card);
      border-radius: var(--radius);
      margin-bottom: 8px;
      box-shadow: var(--shadow-sm);
      overflow: hidden;

      &.today .day-header {
        border-left: 4px solid var(--primary);
      }
    }

    .day-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 16px;
      text-align: left;
      background: var(--bg-card);
      border: none;
      border-left: 4px solid transparent;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      color: inherit;
    }

    .day-header-left {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .day-name {
      font-size: 16px;
      font-weight: 600;
      color: var(--text);
    }

    .day-item.today .day-name {
      color: var(--primary);
    }

    .day-date {
      font-size: 13px;
      color: var(--text-muted);
    }

    .day-progress {
      font-size: 12px;
      color: var(--text-secondary);
      margin-top: 2px;
    }

    .chevron {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      color: var(--text-muted);
      transition: transform 0.25s ease;
    }

    .chevron.open {
      transform: rotate(180deg);
    }

    .day-body {
      padding: 0 16px 16px;
      border-top: 1px solid var(--border);
    }

    .no-tasks {
      padding: 16px 0;
      margin: 0;
      font-size: 14px;
      color: var(--text-muted);
      text-align: center;
    }

    .task-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding-top: 12px;
    }
  `,
})
export class WeekCalendarComponent implements OnInit {
  readonly days = [0, 1, 2, 3, 4, 5, 6];
  readonly dayLabels = DAY_NAMES;
  readonly todayIdx = getTodayDayOfWeek();

  showForm = signal(false);
  editingTask = signal<Task | null>(null);
  selectedDay = signal(this.todayIdx);
  private expandedDays = signal<Set<number>>(new Set([getTodayDayOfWeek()]));

  readonly isDayExpanded = (dayIdx: number): boolean =>
    this.expandedDays().has(dayIdx);

  constructor(readonly week: WeekService) {}

  toggleDay(dayIdx: number): void {
    this.expandedDays.update((set) => {
      const next = new Set(set);
      if (next.has(dayIdx)) next.delete(dayIdx);
      else next.add(dayIdx);
      return next;
    });
  }

  getDateStr(dayIdx: number): string {
    const monday = parseLocalDate(this.week.weekStartDate());
    return formatDateShort(addDays(monday, dayIdx));
  }

  get weekRange(): string {
    return formatWeekRange(this.week.mondayDate());
  }

  get isCurrent(): boolean {
    return isCurrentWeek(this.week.weekStartDate());
  }

  async ngOnInit(): Promise<void> {
    await this.week.loadWeek();
  }

  async prevWeek(): Promise<void> {
    await this.week.prevWeek();
  }

  async nextWeek(): Promise<void> {
    await this.week.nextWeek();
  }

  async goToday(): Promise<void> {
    await this.week.goToCurrentWeek();
    this.selectedDay.set(this.todayIdx);
  }

  async onToggle(id: string): Promise<void> {
    await this.week.toggleTask(id);
  }

  onEdit(task: Task): void {
    this.editingTask.set(task);
    this.showForm.set(true);
  }

  closeForm(): void {
    this.showForm.set(false);
    this.editingTask.set(null);
  }

  async onSaveTask(payload: Partial<Task>[]): Promise<void> {
    const existing = this.editingTask();
    if (existing && payload.length > 0) {
      await this.week.updateTask(existing.id, payload[0]);
    } else {
      for (const data of payload) {
        const order = await this.week.getNextOrder(data.dayOfWeek!);
        const task: Task = {
          id: crypto.randomUUID(),
          title: data.title!,
          description: data.description,
          dayOfWeek: data.dayOfWeek!,
          weekStartDate: this.week.weekStartDate(),
          time: data.time,
          completed: false,
          category: data.category!,
          color: data.color!,
          isRecurring: data.isRecurring!,
          order,
          reminder: data.reminder,
        };
        await this.week.addTask(task);
      }
    }
    this.closeForm();
  }
}
