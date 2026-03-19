import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp } from '@ionic/angular/standalone';
import { BottomNavComponent } from './shared/components/ui/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, RouterOutlet, BottomNavComponent],
  template: `
    <ion-app>
      <main class="app-shell">
        <router-outlet />
      </main>
      <app-bottom-nav />
    </ion-app>
  `,
  styles: `
    .app-shell {
      padding-bottom: calc(var(--nav-height) + var(--safe-bottom) + 8px);
      min-height: 100dvh;
      min-height: -webkit-fill-available;
      width: 100%;
      max-width: 100vw;
      overflow-x: hidden;
    }
  `,
})
export class AppComponent {}
