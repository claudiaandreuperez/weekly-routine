import { Component, input, output } from '@angular/core';
import { Task } from '@core/models/task.model';
import { TimeFormatPipe } from '@shared/pipes/time-format.pipe';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [TimeFormatPipe],
  template: `
    <div
      class="card"
      [class.completed]="task().completed"
      [style.--task-color]="task().color"
      (click)="edit.emit(task())"
    >
      <button class="mini-check" (click)="toggle.emit(task().id); $event.stopPropagation()">
        <div class="dot" [class.checked]="task().completed">
          @if (task().completed) {
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          }
        </div>
      </button>
      <div class="info">
        <span class="title">{{ task().title }}</span>
        @if (task().time) {
          <span class="time">{{ task().time | timeFormat }}</span>
        }
      </div>
    </div>
  `,
  styles: `
    .card {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 10px;
      background: var(--bg-card);
      border-radius: var(--radius-sm);
      border-left: 3px solid var(--task-color);
      box-shadow: var(--shadow-sm);
      cursor: pointer;
      transition: opacity 0.2s;

      &.completed {
        opacity: 0.5;

        .title {
          text-decoration: line-through;
        }
      }
    }

    .mini-check {
      padding: 2px;
      min-width: 28px;
      min-height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dot {
      width: 18px;
      height: 18px;
      border: 2px solid var(--border);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 10px;
        height: 10px;
      }

      &.checked {
        background: var(--success);
        border-color: var(--success);
        color: white;
      }
    }

    .info {
      flex: 1;
      min-width: 0;
    }

    .title {
      font-size: 13px;
      font-weight: 500;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .time {
      font-size: 11px;
      color: var(--text-secondary);
    }
  `,
})
export class TaskCardComponent {
  readonly task = input.required<Task>();
  readonly toggle = output<string>();
  readonly edit = output<Task>();
}
