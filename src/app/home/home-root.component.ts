import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ta9/shared/layout';
import { SliderComponent as SliderModule } from '@ta9/shared/components';

import { NoteFormComponent as NoteFormModule } from './components';
import { INote } from './models';

@Component({
  selector: 'home-root',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    SliderModule,
    NoteFormModule
  ],
  template: `
    <root-layout>
      <layout-header>
        <button (click)="slider.toggle()">open</button>
      </layout-header>
    
      <slider #slider>
        <note-form inner-content 
          [note]="note"
          (onsubmit)="handleSubmit($event)"
        />

        <router-outlet external-content />
      </slider>
    </root-layout>
  `,
})
export class HomeRootComponent {
  note: INote = { } as INote;

  handleSubmit(note: INote): void {
    console.log(note)
  }
}