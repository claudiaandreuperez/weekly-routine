import { Component, input } from '@angular/core';

@Component({
  selector: 'app-day-summary',
  standalone: true,
  template: `
    <div class="summary">
      <span class="done">{{ completed() }}</span>
      <span class="sep">/</span>
      <span class="total">{{ total() }}</span>
    </div>
  `,
  styles: `
    .summary {
      font-size: 12px;
      color: var(--text-muted);
    }

    .done {
      font-weight: 700;
      color: var(--text);
    }

    .sep {
      margin: 0 1px;
    }
  `,
})
export class DaySummaryComponent {
  readonly completed = input(0);
  readonly total = input(0);
}
