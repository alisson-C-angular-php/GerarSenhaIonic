import { Routes } from '@angular/router';

export const routes: Routes = [
  
    {
      path: '',
      loadComponent: () => import('../app/tab1/tab1.page').then((m) => m.Tab1Page),
    },
];
