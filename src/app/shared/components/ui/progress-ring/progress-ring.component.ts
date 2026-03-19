import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-progress-ring',
  standalone: true,
  template: `
    <div class="progress-ring" [class.complete]="progress() >= 1">
      <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 100 100">
        <circle class="bg-ring" cx="50" cy="50" [attr.r]="radius" fill="none" [attr.stroke-width]="strokeWidth" />
        <circle
          class="progress"
          cx="50"
          cy="50"
          [attr.r]="radius"
          fill="none"
          [attr.stroke-width]="strokeWidth"
          [attr.stroke-dasharray]="circumference"
          [attr.stroke-dashoffset]="dashOffset()"
          stroke-linecap="round"
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div class="label">
        <span class="count">{{ completed() }}</span>
        <span class="separator">/</span>
        <span class="total">{{ total() }}</span>
      </div>
    </div>
  `,
  styles: `
    .progress-ring {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      transform: scaleX(-1);
    }

    .bg-ring {
      stroke: var(--border);
    }

    .progress {
      stroke: var(--primary);
      transition: stroke-dashoffset 0.5s ease;
    }

    .complete .progress {
      stroke: var(--success);
    }

    .label {
      position: absolute;
      display: flex;
      align-items: baseline;
      gap: 1px;
      font-weight: 700;
    }

    .count {
      font-size: 1.1em;
      color: var(--text);
    }

    .separator {
      font-size: 0.8em;
      color: var(--text-muted);
    }

    .total {
      font-size: 0.8em;
      color: var(--text-secondary);
    }
  `,
})
export class ProgressRingComponent {
  readonly progress = input(0);
  readonly completed = input(0);
  readonly total = input(0);
  readonly size = input(80);

  readonly radius = 40;
  readonly strokeWidth = 6;
  readonly circumference = 2 * Math.PI * this.radius;

  readonly dashOffset = computed(() => this.circumference * (1 - this.progress()));
}
