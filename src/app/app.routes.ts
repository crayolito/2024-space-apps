import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((m) => m.default),
  },
  {
    path: 'linea-tiempo',
    loadComponent: () =>
      import('./linea-tiempo/linea-tiempo.component').then((m) => m.default),
  },
  {
    path: 'educativo',
    loadComponent: () =>
      import('./educativo/educativo.component').then((m) => m.default),
  },
  {
    path: 'space-apps-lt',
    loadComponent: () =>
      import('./space-lte/space-lte.component').then((m) => m.default),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
