import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/auth/signup/signup').then((m) => m.Signup),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login').then((m) => m.Login),
  },
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    pathMatch: 'full',
  },
];
