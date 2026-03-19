import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pending-alert',
  standalone: true,
  template: `
    @if (pendingCount() > 0) {
      <div class="alert">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <span>{{ pendingCount() }} tasca{{ pendingCount() > 1 ? 's' : '' }} pendent{{ pendingCount() > 1 ? 's' : '' }}</span>
      </div>
    }
  `,
  styles: `
    .alert {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 16px;
      background: color-mix(in srgb, var(--warning) 12%, transparent);
      border: 1px solid color-mix(in srgb, var(--warning) 30%, transparent);
      border-radius: var(--radius-sm);
      color: var(--warning);
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 16px;

      svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }
    }
  `,
})
export class PendingAlertComponent {
  readonly pendingCount = input(0);
}
