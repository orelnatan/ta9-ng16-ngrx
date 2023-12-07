import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  {
    path: 'notes',
    loadComponent: () => import('./pages/notes-page').then(notes => notes.NotesPageComponent),
  }
]
  

