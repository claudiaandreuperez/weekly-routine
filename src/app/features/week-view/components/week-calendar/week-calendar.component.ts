import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekService } from '@core/services/week.service';
import { Task, DAY_NAMES_SHORT } from '@core/models/task.model';
import { DayColumnComponent } from '../day-column/day-column.component';
import { FabButtonComponent } from '@shared/components/ui/fab-button/fab-button.component';
import { TaskFormComponent } from '@shared/components/forms/task-form/task-form.component';
import {
  formatWeekRange,
  isCurrentWeek,
  getTodayDayOfWeek,
} from '@shared/utils/date.utils';

@Component({
  selector: 'app-week-calendar',
  standalone: true,
  imports: [CommonModule, DayColumnComponent, FabButtonComponent, TaskFormComponent],
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

      <div class="week-scroll">
        <div class="week-scroll-inner">
        @for (day of days; track day) {
          @let progress = week.getDayProgress(day);
          <div class="day-slot">
            <app-day-column
              [dayIndex]="day"
              [tasks]="week.getTasksForDay(day)"
              [isToday]="isCurrent && day === todayIdx"
              [isActive]="selectedDay() === day"
              [weekStart]="week.weekStartDate()"
              (toggleTask)="onToggle($event)"
              (editTask)="onEdit($event)"
              (selectDay)="selectedDay.set($event)"
            />
            <div class="stat-item" [class.today]="isCurrent && day === todayIdx">
              <span class="stat-label">{{ dayLabels[day] }}</span>
              <span class="stat-val">{{ progress.completed }}/{{ progress.total }}</span>
            </div>
          </div>
        }
        </div>
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

    .week-scroll {
      overflow-x: auto;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
      padding: 0 16px 16px;
      -webkit-overflow-scrolling: touch;
      width: 100%;
    }

    .week-scroll-inner {
      display: flex;
      flex-wrap: nowrap;
      gap: 12px;
      min-width: min-content;
      padding-right: 16px;
    }

    .day-slot {
      width: calc(100vw - 32px);
      min-width: 260px;
      max-width: 380px;
      flex-shrink: 0;
      scroll-snap-align: start;
      scroll-snap-stop: always;
      display: flex;
      flex-direction: column;
    }

    .day-slot app-day-column {
      flex: 1;
      min-height: 0;
    }

    .stat-item {
      flex-shrink: 0;
      text-align: center;
      padding: 8px 4px;
      background: var(--bg-card);
      border-radius: var(--radius-sm);
      margin-top: 4px;
      box-shadow: var(--shadow-sm);

      &.today .stat-label {
        color: var(--primary);
        font-weight: 700;
      }
    }

    .stat-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--text-muted);
      display: block;
    }

    .stat-val {
      font-size: 12px;
      color: var(--text-secondary);
      font-weight: 500;
    }
  `,
})
export class WeekCalendarComponent implements OnInit {
  readonly days = [0, 1, 2, 3, 4, 5, 6];
  readonly dayLabels = DAY_NAMES_SHORT;
  readonly todayIdx = getTodayDayOfWeek();

  showForm = signal(false);
  editingTask = signal<Task | null>(null);
  selectedDay = signal(this.todayIdx);

  constructor(readonly week: WeekService) {}

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

  async onSaveTask(data: Partial<Task>): Promise<void> {
    const existing = this.editingTask();
    if (existing) {
      await this.week.updateTask(existing.id, data);
    } else {
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
    this.closeForm();
  }
}
