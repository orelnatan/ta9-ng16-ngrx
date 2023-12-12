import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  {
    path: 'notes',
    loadComponent: () => import('./pages').then(notes => notes.NotesPageModule),
  }
]
  

