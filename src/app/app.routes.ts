import { Routes } from '@angular/router';
import { Dashboard } from './layout/sidebar/dashboard/dashboard';
import { MyClimb } from './layout/sidebar/my-climb/my-climb';
import { Toolbelt } from './layout/sidebar/toolbelt/toolbelt';
import { Schedule } from './layout/sidebar/schedule/schedule';
import { ProgressCertification } from './layout/sidebar/progress-certification/progress-certification';
import { MyCohort } from './layout/sidebar/my-cohort/my-cohort';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./layout/sidebar/dashboard/dashboard').then((m) => m.Dashboard),
  },
    {
    path: 'my-climb',
    loadComponent: () => import('./layout/sidebar/my-climb/my-climb').then((m) => m.MyClimb),
  },
   {
    path: 'toolbelt',
    loadComponent: () => import('./layout/sidebar/toolbelt/toolbelt').then((m) => m.Toolbelt),
  },
  {
    path: 'schedule',
    loadComponent: () => import('./layout/sidebar/schedule/schedule').then((m) => m.Schedule),
  },
  {
    path: 'progress&certification',
    loadComponent: () => import('./layout/sidebar/progress-certification/progress-certification').then((m) => m.ProgressCertification),
  },
  {
    path: 'my-cohort',
    loadComponent: () => import('./layout/sidebar/my-cohort/my-cohort').then((m) => m.MyCohort),
  },
  {
    path: 'my-instructors',
    loadComponent: () => import('./layout/sidebar/my-instructors/my-instructors').then((m) => m.MyInstructors),
  },
  {
    path: 'resources',
    loadComponent: () => import('./layout/sidebar/resources/resources').then((m) => m.Resources),
  },

];
