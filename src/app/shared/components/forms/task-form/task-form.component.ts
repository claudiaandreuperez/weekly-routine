import { Component, input, output, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task, CATEGORIES, DAY_NAMES } from '@core/models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="overlay" (click)="close.emit()" [class.visible]="visible()"></div>
    <div class="sheet" [class.visible]="visible()">
      <div class="handle"></div>
      <h2>{{ editTask() ? 'Editar tasca' : 'Nova tasca' }}</h2>

      <div class="form-group">
        <input
          type="text"
          [(ngModel)]="title"
          placeholder="Què has de fer?"
          class="input-title"
          autofocus
        />
      </div>

      <div class="form-group">
        <textarea
          [(ngModel)]="description"
          placeholder="Descripció (opcional)"
          rows="2"
          class="input-desc"
        ></textarea>
      </div>

      <div class="form-row">
        <div class="form-group half">
          <label>Dia</label>
          <select [(ngModel)]="dayOfWeek">
            @for (day of dayNames; track $index) {
              <option [ngValue]="$index">{{ day }}</option>
            }
          </select>
        </div>
        <div class="form-group half">
          <label>Hora (opcional)</label>
          <input type="time" [(ngModel)]="time" />
        </div>
      </div>

      <div class="form-group">
        <label>Categoria</label>
        <div class="category-grid">
          @for (cat of categories; track cat.name) {
            <button
              class="cat-chip"
              [class.selected]="category === cat.name"
              [style.--cat-color]="cat.color"
              (click)="category = cat.name; color = cat.color"
            >
              {{ cat.name }}
            </button>
          }
        </div>
      </div>

      <div class="form-group">
        <label class="toggle-row">
          <span>Repetir cada setmana</span>
          <input type="checkbox" [(ngModel)]="isRecurring" class="toggle" />
        </label>
      </div>

      <div class="form-group">
        <label class="toggle-row">
          <span>Recordatori</span>
          <input type="checkbox" [(ngModel)]="reminder" class="toggle" />
        </label>
      </div>

      <div class="actions">
        <button class="btn-cancel" (click)="close.emit()">Cancel·lar</button>
        <button class="btn-save" (click)="save()" [disabled]="!title.trim()">
          {{ editTask() ? 'Desar' : 'Afegir' }}
        </button>
      </div>
    </div>
  `,
  styles: `
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 200;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s;

      &.visible {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .sheet {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--bg-card);
      border-radius: 20px 20px 0 0;
      padding: 12px 20px calc(var(--safe-bottom) + 20px);
      z-index: 201;
      transform: translateY(100%);
      transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
      max-height: 90dvh;
      overflow-y: auto;

      &.visible {
        transform: translateY(0);
      }
    }

    .handle {
      width: 36px;
      height: 4px;
      background: var(--border);
      border-radius: 2px;
      margin: 0 auto 16px;
    }

    h2 {
      font-size: 18px;
      margin-bottom: 16px;
    }

    .form-group {
      margin-bottom: 14px;
    }

    .form-row {
      display: flex;
      gap: 12px;
    }

    .half {
      flex: 1;
    }

    label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-secondary);
      margin-bottom: 6px;
    }

    .input-title {
      width: 100%;
      padding: 12px;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      font-size: 16px;
      background: var(--bg-surface);
      outline: none;

      &:focus {
        border-color: var(--primary);
      }
    }

    .input-desc {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      font-size: 14px;
      background: var(--bg-surface);
      resize: none;
      outline: none;

      &:focus {
        border-color: var(--primary);
      }
    }

    select,
    input[type='time'] {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--bg-surface);
      font-size: 14px;
      outline: none;

      &:focus {
        border-color: var(--primary);
      }
    }

    .category-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .cat-chip {
      padding: 6px 14px;
      border-radius: var(--radius-full);
      font-size: 13px;
      font-weight: 500;
      border: 2px solid var(--border);
      transition: all 0.2s;

      &.selected {
        border-color: var(--cat-color);
        background: color-mix(in srgb, var(--cat-color) 15%, transparent);
        color: var(--cat-color);
      }
    }

    .toggle-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      font-weight: 500;
      color: var(--text);
    }

    .toggle {
      width: 44px;
      height: 24px;
      appearance: none;
      background: var(--border);
      border-radius: 12px;
      position: relative;
      cursor: pointer;
      transition: background 0.2s;

      &::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        transition: transform 0.2s;
        box-shadow: var(--shadow-sm);
      }

      &:checked {
        background: var(--primary);

        &::after {
          transform: translateX(20px);
        }
      }
    }

    .actions {
      display: flex;
      gap: 12px;
      margin-top: 20px;
    }

    .btn-cancel {
      flex: 1;
      padding: 14px;
      border-radius: var(--radius-sm);
      font-weight: 600;
      font-size: 15px;
      background: var(--bg-surface);
      color: var(--text-secondary);
    }

    .btn-save {
      flex: 2;
      padding: 14px;
      border-radius: var(--radius-sm);
      font-weight: 600;
      font-size: 15px;
      background: var(--primary);
      color: white;

      &:disabled {
        opacity: 0.5;
      }

      &:active:not(:disabled) {
        transform: scale(0.98);
      }
    }
  `,
})
export class TaskFormComponent implements OnInit {
  readonly visible = input(false);
  readonly editTask = input<Task | null>(null);
  readonly defaultDay = input(0);
  readonly close = output();
  readonly saveTask = output<Partial<Task>>();

  readonly categories = CATEGORIES;
  readonly dayNames = DAY_NAMES;

  title = '';
  description = '';
  dayOfWeek = 0;
  time = '';
  category = CATEGORIES[0].name;
  color = CATEGORIES[0].color;
  isRecurring = false;
  reminder = false;

  ngOnInit(): void {
    this.resetForm();
  }

  private resetForm(): void {
    const task = this.editTask();
    if (task) {
      this.title = task.title;
      this.description = task.description ?? '';
      this.dayOfWeek = task.dayOfWeek;
      this.time = task.time ?? '';
      this.category = task.category;
      this.color = task.color;
      this.isRecurring = task.isRecurring;
      this.reminder = task.reminder ?? false;
    } else {
      this.dayOfWeek = this.defaultDay();
    }
  }

  save(): void {
    if (!this.title.trim()) return;
    this.saveTask.emit({
      title: this.title.trim(),
      description: this.description.trim() || undefined,
      dayOfWeek: this.dayOfWeek,
      time: this.time || undefined,
      category: this.category,
      color: this.color,
      isRecurring: this.isRecurring,
      reminder: this.reminder,
    });
    this.title = '';
    this.description = '';
    this.time = '';
    this.isRecurring = false;
    this.reminder = false;
  }
}
