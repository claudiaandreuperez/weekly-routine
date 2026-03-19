import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, DAY_NAMES_SHORT } from '@core/models/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';
import { addDays, formatDateShort, parseLocalDate } from '@shared/utils/date.utils';

@Component({
  selector: 'app-day-column',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  template: `
    <div class="day-col" [class.today]="isToday()" [class.active]="isActive()">
      <div class="day-header" (click)="selectDay.emit(dayIndex())">
        <span class="day-name">{{ dayName }}</span>
        <span class="day-date">{{ dateStr }}</span>
        @if (tasks().length > 0) {
          <div class="progress-pill">
            <div class="fill" [style.width.%]="progressPct"></div>
          </div>
        }
      </div>
      <div class="tasks-container">
        @for (task of tasks(); track task.id) {
          <app-task-card
            [task]="task"
            (toggle)="toggleTask.emit($event)"
            (edit)="editTask.emit($event)"
          />
        }
        @if (tasks().length === 0) {
          <div class="no-tasks">Sense tasques</div>
        }
      </div>
    </div>
  `,
  styles: `
    .day-col {
      min-width: 100%;
      flex-shrink: 0;
    }

    .day-header {
      text-align: center;
      padding: 10px 8px;
      cursor: pointer;
    }

    .day-name {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--text-secondary);
      display: block;
    }

    .day-date {
      font-size: 13px;
      color: var(--text-muted);
      display: block;
      margin-top: 2px;
    }

    .today .day-name {
      color: var(--primary);
    }

    .today .day-date {
      color: var(--primary);
      font-weight: 600;
    }

    .progress-pill {
      height: 3px;
      background: var(--border);
      border-radius: 2px;
      margin-top: 6px;
      overflow: hidden;
    }

    .fill {
      height: 100%;
      background: var(--success);
      border-radius: 2px;
      transition: width 0.3s;
    }

    .tasks-container {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 0 4px;
    }

    .no-tasks {
      text-align: center;
      font-size: 12px;
      color: var(--text-muted);
      padding: 20px 0;
    }
  `,
})
export class DayColumnComponent {
  readonly dayIndex = input.required<number>();
  readonly tasks = input.required<Task[]>();
  readonly isToday = input(false);
  readonly isActive = input(false);
  readonly weekStart = input.required<string>();

  readonly toggleTask = output<string>();
  readonly editTask = output<Task>();
  readonly selectDay = output<number>();

  get dayName(): string {
    return DAY_NAMES_SHORT[this.dayIndex()];
  }

  get dateStr(): string {
    const monday = parseLocalDate(this.weekStart());
    return formatDateShort(addDays(monday, this.dayIndex()));
  }

  get progressPct(): number {
    const t = this.tasks();
    if (t.length === 0) return 0;
    return (t.filter((x) => x.completed).length / t.length) * 100;
  }
}
