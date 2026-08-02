import { Routes } from '@angular/router';
import { Dashboard } from './layout/sidebar/dashboard/dashboard';
import { App } from './app';
import { Home } from './layout/home/home';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./layout/sidebar/dashboard/dashboard').then((m) => m.Dashboard),
  },
];
