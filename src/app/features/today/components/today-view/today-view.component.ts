import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekService } from '@core/services/week.service';
import { NotificationService } from '@core/services/notification.service';
import { Task, DAY_NAMES } from '@core/models/task.model';
import { ProgressRingComponent } from '@shared/components/ui/progress-ring/progress-ring.component';
import { FabButtonComponent } from '@shared/components/ui/fab-button/fab-button.component';
import { TaskFormComponent } from '@shared/components/forms/task-form/task-form.component';
import { PendingAlertComponent } from '../pending-alert/pending-alert.component';
import { TimeFormatPipe } from '@shared/pipes/time-format.pipe';

@Component({
  selector: 'app-today-view',
  standalone: true,
  imports: [
    CommonModule,
    ProgressRingComponent,
    FabButtonComponent,
    TaskFormComponent,
    PendingAlertComponent,
    TimeFormatPipe,
  ],
  template: `
    <div class="today-page">
      <header class="header">
        <div class="header-info">
          <h1>{{ dayName() }}</h1>
          <p class="date-label">{{ dateLabel() }}</p>
        </div>
        <app-progress-ring
          [progress]="week.todayProgress()"
          [completed]="week.todayCompleted()"
          [total]="week.todayTotal()"
          [size]="64"
        />
      </header>

      <app-pending-alert [pendingCount]="pendingCount()" />

      @if (pendingTasks().length === 0 && completedTasks().length === 0) {
        <div class="empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
            <rect x="9" y="3" width="6" height="4" rx="1" />
          </svg>
          <p>No hi ha tasques per avui</p>
          <span>Prem + per afegir-ne una</span>
        </div>
      } @else if (pendingTasks().length === 0) {
        <div class="empty done">
          <p>Totes fetes!</p>
          <span>Avui no tens tasques pendents</span>
        </div>
      }

      @if (pendingTasks().length > 0) {
        <ul class="task-list">
          @for (task of pendingTasks(); track task.id) {
            <li class="task-item" [style.--task-color]="task.color">
              <button class="check-btn" (click)="toggle(task.id)">
                <div class="checkbox">
                  <!-- buit per pendents -->
                </div>
              </button>
              <div class="task-content" (click)="editExisting(task)">
                <span class="task-title">{{ task.title }}</span>
                <div class="task-meta">
                  @if (task.time) {
                    <span class="task-time">{{ task.time | timeFormat }}</span>
                  }
                  <span class="task-cat" [style.color]="task.color">{{ task.category }}</span>
                </div>
              </div>
              <button class="delete-btn" (click)="deleteTask(task.id)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </li>
          }
        </ul>
      }

      @if (completedTasks().length > 0) {
        <div class="completed-section">
          <button
            type="button"
            class="completed-toggle"
            (click)="showCompleted.update((v) => !v)"
          >
            <span>Completades ({{ completedTasks().length }})</span>
            <svg
              class="chevron"
              [class.open]="showCompleted()"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          @if (showCompleted()) {
            <ul class="task-list completed-list">
              @for (task of completedTasks(); track task.id) {
                <li class="task-item completed" [style.--task-color]="task.color">
                  <button class="check-btn" (click)="toggle(task.id)">
                    <div class="checkbox checked">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </button>
                  <div class="task-content" (click)="editExisting(task)">
                    <span class="task-title">{{ task.title }}</span>
                    <div class="task-meta">
                      @if (task.time) {
                        <span class="task-time">{{ task.time | timeFormat }}</span>
                      }
                      <span class="task-cat" [style.color]="task.color">{{ task.category }}</span>
                    </div>
                  </div>
                  <button class="delete-btn" (click)="deleteTask(task.id)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </li>
              }
            </ul>
          }
        </div>
      }
    </div>

    <app-fab-button (fabClick)="showForm.set(true)" />

    <app-task-form
      [visible]="showForm()"
      [editTask]="editingTask()"
      [defaultDay]="week.todayDayOfWeek()"
      (close)="closeForm()"
      (saveTask)="onSaveTask($event)"
    />
  `,
  styles: `
    .today-page {
      padding: 16px;
      padding-top: calc(var(--safe-top) + 16px);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 28px;
      font-weight: 700;
    }

    .date-label {
      font-size: 14px;
      color: var(--text-secondary);
      margin-top: 2px;
    }

    .empty {
      text-align: center;
      padding: 48px 16px;
      color: var(--text-muted);

      svg {
        width: 48px;
        height: 48px;
        margin-bottom: 16px;
        opacity: 0.5;
      }

      p {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 4px;
        color: var(--text-secondary);
      }

      span {
        font-size: 14px;
      }

      &.done {
        padding: 32px 16px;

        p {
          color: var(--success);
          font-size: 18px;
        }
      }
    }

    .completed-section {
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid var(--border);
    }

    .completed-toggle {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      font-size: 14px;
      font-weight: 600;
      color: var(--text-muted);
      background: none;
      border: none;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      .chevron {
        width: 20px;
        height: 20px;
        transition: transform 0.2s;

        &.open {
          transform: rotate(180deg);
        }
      }
    }

    .completed-list {
      margin-top: 8px;
    }

    .task-item.completed {
      opacity: 0.7;

      .task-title {
        text-decoration: line-through;
        color: var(--text-muted);
      }
    }

    .task-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .task-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px;
      background: var(--bg-card);
      border-radius: var(--radius);
      box-shadow: var(--shadow-sm);
      border-left: 3px solid var(--task-color, var(--primary));
      transition: opacity 0.3s, transform 0.3s;

      &.completed {
        opacity: 0.6;

        .task-title {
          text-decoration: line-through;
          color: var(--text-muted);
        }
      }
    }

    .check-btn {
      padding: 4px;
      min-width: 44px;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .checkbox {
      width: 24px;
      height: 24px;
      border: 2px solid var(--border);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;

      svg {
        width: 14px;
        height: 14px;
      }

      &.checked {
        background: var(--success);
        border-color: var(--success);
        color: white;
      }
    }

    .task-content {
      flex: 1;
      min-width: 0;
      cursor: pointer;
    }

    .task-title {
      font-size: 15px;
      font-weight: 500;
      display: block;
      transition: color 0.2s;
    }

    .task-meta {
      display: flex;
      gap: 10px;
      margin-top: 4px;
      font-size: 12px;
    }

    .task-time {
      color: var(--text-secondary);
      font-weight: 500;
    }

    .task-cat {
      font-weight: 600;
    }

    .delete-btn {
      padding: 8px;
      min-width: var(--touch-min, 44px);
      min-height: var(--touch-min, 44px);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      transition: color 0.2s;

      svg {
        width: 18px;
        height: 18px;
      }

      &:active {
        color: var(--danger);
      }
    }
  `,
})
export class TodayViewComponent implements OnInit {
  showForm = signal(false);
  editingTask = signal<Task | null>(null);

  readonly dayName = computed(() => DAY_NAMES[this.week.todayDayOfWeek()]);
  readonly dateLabel = computed(() => {
    const today = new Date();
    return today.toLocaleDateString('ca', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  });
  readonly pendingTasks = computed(() =>
    this.week.todayTasks().filter((t) => !t.completed)
  );
  readonly completedTasks = computed(() =>
    this.week.todayTasks().filter((t) => t.completed)
  );
  readonly pendingCount = computed(() => this.pendingTasks().length);
  showCompleted = signal(false);

  constructor(
    readonly week: WeekService,
    private notifications: NotificationService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.week.goToCurrentWeek();
    await this.notifications.requestPermission();
    this.notifications.maybeSendDailyDigest(this.pendingCount());
  }

  async toggle(id: string): Promise<void> {
    await this.week.toggleTask(id);
  }

  editExisting(task: Task): void {
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

  async deleteTask(id: string): Promise<void> {
    await this.week.deleteTask(id);
  }
}
