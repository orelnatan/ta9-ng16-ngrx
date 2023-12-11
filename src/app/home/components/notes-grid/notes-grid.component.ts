import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { INote } from '@ta9/home/models';
import { HighlightPipeModule } from '@ta9/shared/pipes';

@Component({
  selector: 'notes-grid',
  standalone: true,
  imports: [
    CommonModule,
    HighlightPipeModule,
  ],
  templateUrl: './notes-grid.component.html',
  styleUrls: ['./notes-grid.component.scss']
})
export class NotesGridComponent {
  @Input() elements: INote[] = [];
  @Input() highlighted: string;

  @Output() note: EventEmitter<INote> = new EventEmitter();
}
