import { Routes } from '@angular/router';
import { homeRoutes } from './home/home.routes';

export const appRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home-root.component').then(home => home.HomeRootComponent),
    children: [ ...homeRoutes ]
  },
];
