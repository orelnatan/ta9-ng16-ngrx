import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { Ta9FormsModule } from '@ta9/shared/ta9-forms';
import { INote } from '@ta9/home/models';

import * as moment from 'moment';

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
  styleUrls: ['./note-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteFormComponent {
  @Input() note: INote = {} as INote;

  @Output() update: EventEmitter<INote> = new EventEmitter();
  @Output() create: EventEmitter<INote> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  handleSubmit(note: INote): void {
    note.id ? this.updateExistingNote(note) : this.createNewNote(note);
  }

  // if a note contain an id, it means we are just updating an old one
  updateExistingNote(note: INote): void {
    note.lastUpdate = moment().format('DD/MM/YYYY');

    this.update.emit(note);
  }
  
  // if a note does not contain an id, it means we are trying to create a new one
  createNewNote(note: INote): void {
    note.createdAt = moment().format('DD/MM/YYYY');
    note.lastUpdate = moment().format('DD/MM/YYYY');

    this.create.emit(note);
  }
}