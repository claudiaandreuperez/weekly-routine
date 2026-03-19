import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="bottom-nav">
      <a routerLink="/today" routerLinkActive="active" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>Avui</span>
      </a>
      <a routerLink="/week" routerLinkActive="active" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>Setmana</span>
      </a>
      <a routerLink="/templates" routerLinkActive="active" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
        <span>Plantilles</span>
      </a>
    </nav>
  `,
  styles: `
    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: calc(var(--nav-height) + var(--safe-bottom));
      padding-bottom: var(--safe-bottom);
      background: var(--bg-card);
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-around;
      align-items: center;
      z-index: 100;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
    }

    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      padding: 8px 16px;
      border-radius: var(--radius-sm);
      color: var(--text-muted);
      transition: color 0.2s;
      min-width: 64px;
      min-height: 44px;
      justify-content: center;

      svg {
        width: 22px;
        height: 22px;
      }

      span {
        font-size: 11px;
        font-weight: 500;
      }

      &.active {
        color: var(--primary);
      }
    }
  `,
})
export class BottomNavComponent {}
