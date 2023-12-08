import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { Ta9FormsModule } from '@ta9/shared/ta9-forms';
import { INote } from '@ta9/home/models';

@Component({
  selector: 'note-form',
  standalone: true,
  imports: [
    CommonModule,
    Ta9FormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent {
  @Input() note: INote = {} as INote;

  @Output() onsubmit: EventEmitter<INote> = new EventEmitter();
}