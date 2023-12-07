import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { LayoutModule } from '@ta9/shared/layout';
import { NotesService } from '@ta9/home/services';

import { INote } from '@ta9/home/models';

@Component({
  selector: 'notes-page',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
  ],
  templateUrl: './notes-page.component.html'
})
export class NotesPageComponent {
  notes: Observable<INote[]> = this.notesService.fetch();

  constructor(
      private readonly notesService: NotesService
  ) {}
}
