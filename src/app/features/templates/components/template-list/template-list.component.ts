import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DbService } from '@core/services/db.service';
import { WeekService } from '@core/services/week.service';
import { WeekTemplate, DAY_NAMES_SHORT } from '@core/models/task.model';
import { formatWeekRange } from '@shared/utils/date.utils';

@Component({
  selector: 'app-template-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="templates-page">
      <header class="header">
        <h1>Plantilles</h1>
        <p class="subtitle">Desa i reutilitza les teves setmanes</p>
      </header>

      <section class="section">
        <h2>Desar setmana actual</h2>
        <p class="hint">Desa la setmana {{ currentWeekRange }} com a plantilla</p>
        <div class="save-row">
          <input
            type="text"
            [(ngModel)]="newTemplateName"
            placeholder="Nom de la plantilla"
            class="input"
          />
          <button
            class="btn-save"
            (click)="saveCurrentWeek()"
            [disabled]="!newTemplateName.trim()"
          >
            Desar
          </button>
        </div>
      </section>

      <section class="section">
        <h2>Les meves plantilles</h2>
        @if (templates().length === 0) {
          <div class="empty">
            <p>No tens plantilles desades</p>
          </div>
        } @else {
          <ul class="template-list">
            @for (tpl of templates(); track tpl.id) {
              <li class="template-card">
                <div class="tpl-info">
                  <span class="tpl-name">{{ tpl.name }}</span>
                  <span class="tpl-count">{{ tpl.tasks.length }} tasques</span>
                  <div class="tpl-days">
                    @for (day of getDayDistribution(tpl); track day.idx) {
                      @if (day.count > 0) {
                        <span class="day-badge">{{ dayNames[day.idx] }}: {{ day.count }}</span>
                      }
                    }
                  </div>
                </div>
                <div class="tpl-actions">
                  <button class="btn-apply" (click)="applyTemplate(tpl)">Aplicar</button>
                  <button class="btn-delete" (click)="deleteTemplate(tpl.id)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </li>
            }
          </ul>
        }
      </section>

      @if (message()) {
        <div class="toast" [class.error]="isError()">
          {{ message() }}
        </div>
      }
    </div>
  `,
  styles: `
    .templates-page {
      padding: 16px;
      padding-top: calc(var(--safe-top) + 16px);
    }

    .header {
      margin-bottom: 24px;

      h1 {
        font-size: 28px;
        font-weight: 700;
      }

      .subtitle {
        font-size: 14px;
        color: var(--text-secondary);
        margin-top: 2px;
      }
    }

    .section {
      margin-bottom: 28px;

      h2 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;
      }
    }

    .hint {
      font-size: 13px;
      color: var(--text-muted);
      margin-bottom: 10px;
    }

    .save-row {
      display: flex;
      gap: 10px;
    }

    .input {
      flex: 1;
      padding: 12px;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--bg-surface);
      font-size: 14px;
      outline: none;

      &:focus {
        border-color: var(--primary);
      }
    }

    .btn-save {
      padding: 12px 20px;
      background: var(--primary);
      color: white;
      border-radius: var(--radius-sm);
      font-weight: 600;
      font-size: 14px;
      white-space: nowrap;

      &:disabled {
        opacity: 0.5;
      }
    }

    .empty {
      text-align: center;
      padding: 32px;
      color: var(--text-muted);
      font-size: 14px;
    }

    .template-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .template-card {
      background: var(--bg-card);
      padding: 14px;
      border-radius: var(--radius);
      box-shadow: var(--shadow-sm);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .tpl-info {
      flex: 1;
      min-width: 0;
    }

    .tpl-name {
      font-size: 15px;
      font-weight: 600;
      display: block;
    }

    .tpl-count {
      font-size: 12px;
      color: var(--text-secondary);
    }

    .tpl-days {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 6px;
    }

    .day-badge {
      font-size: 11px;
      padding: 2px 6px;
      background: var(--bg-surface);
      border-radius: var(--radius-full);
      color: var(--text-secondary);
    }

    .tpl-actions {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .btn-apply {
      padding: 8px 16px;
      background: color-mix(in srgb, var(--primary) 12%, transparent);
      color: var(--primary);
      border-radius: var(--radius-sm);
      font-weight: 600;
      font-size: 13px;
    }

    .btn-delete {
      min-width: var(--touch-min, 44px);
      min-height: var(--touch-min, 44px);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);

      svg {
        width: 18px;
        height: 18px;
      }

      &:active {
        color: var(--danger);
      }
    }

    .toast {
      position: fixed;
      bottom: calc(var(--nav-height) + var(--safe-bottom) + 16px);
      left: 16px;
      right: 16px;
      padding: 14px 16px;
      background: var(--success);
      color: white;
      border-radius: var(--radius-sm);
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      z-index: 150;
      animation: slideUp 0.3s ease;

      &.error {
        background: var(--danger);
      }
    }

    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,
})
export class TemplateListComponent implements OnInit {
  readonly templates = signal<WeekTemplate[]>([]);
  readonly message = signal('');
  readonly isError = signal(false);
  readonly dayNames = DAY_NAMES_SHORT;

  newTemplateName = '';

  constructor(
    private db: DbService,
    private week: WeekService
  ) {}

  get currentWeekRange(): string {
    return formatWeekRange(this.week.mondayDate());
  }

  async ngOnInit(): Promise<void> {
    await this.week.loadWeek();
    await this.loadTemplates();
  }

  async loadTemplates(): Promise<void> {
    this.templates.set(await this.db.getAllTemplates());
  }

  async saveCurrentWeek(): Promise<void> {
    const tasks = this.week.tasks();
    if (tasks.length === 0) {
      this.showMessage('No hi ha tasques aquesta setmana per desar', true);
      return;
    }

    const template: WeekTemplate = {
      id: crypto.randomUUID(),
      name: this.newTemplateName.trim(),
      tasks: tasks.map(({ id, weekStartDate, completed, ...rest }) => rest),
    };

    await this.db.addTemplate(template);
    this.newTemplateName = '';
    await this.loadTemplates();
    this.showMessage('Plantilla desada correctament');
  }

  async applyTemplate(tpl: WeekTemplate): Promise<void> {
    await this.db.applyTemplate(tpl, this.week.weekStartDate());
    await this.week.loadWeek();
    this.showMessage(`Plantilla «${tpl.name}» aplicada`);
  }

  async deleteTemplate(id: string): Promise<void> {
    await this.db.deleteTemplate(id);
    await this.loadTemplates();
    this.showMessage('Plantilla eliminada');
  }

  getDayDistribution(tpl: WeekTemplate): { idx: number; count: number }[] {
    const counts = new Array(7).fill(0);
    tpl.tasks.forEach((t) => counts[t.dayOfWeek]++);
    return counts.map((count, idx) => ({ idx, count }));
  }

  private showMessage(msg: string, error = false): void {
    this.message.set(msg);
    this.isError.set(error);
    setTimeout(() => this.message.set(''), 3000);
  }
}
