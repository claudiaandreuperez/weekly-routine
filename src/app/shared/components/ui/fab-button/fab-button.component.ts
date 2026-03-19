import { Component, output } from '@angular/core';

@Component({
  selector: 'app-fab-button',
  standalone: true,
  template: `
    <button class="fab" (click)="fabClick.emit()" aria-label="Afegir tasca">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  `,
  styles: `
    .fab {
      position: fixed;
      bottom: calc(var(--nav-height) + var(--safe-bottom) + 16px);
      right: 16px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--primary);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-lg);
      z-index: 90;
      transition: transform 0.2s, box-shadow 0.2s;

      svg {
        width: 24px;
        height: 24px;
      }

      &:active {
        transform: scale(0.92);
      }
    }
  `,
})
export class FabButtonComponent {
  readonly fabClick = output();
}
