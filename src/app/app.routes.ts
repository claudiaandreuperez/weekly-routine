import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'today', pathMatch: 'full' },
  {
    path: 'today',
    loadComponent: () =>
      import('./features/today/components/today-view/today-view.component').then(
        (m) => m.TodayViewComponent
      ),
  },
  {
    path: 'week',
    loadComponent: () =>
      import('./features/week-view/components/week-calendar/week-calendar.component').then(
        (m) => m.WeekCalendarComponent
      ),
  },
  {
    path: 'templates',
    loadComponent: () =>
      import('./features/templates/components/template-list/template-list.component').then(
        (m) => m.TemplateListComponent
      ),
  },
  { path: '**', redirectTo: 'today' },
];
