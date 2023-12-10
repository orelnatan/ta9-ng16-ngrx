import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { Ta9FormsModule } from '@ta9/shared/ta9-forms';
import { InputSearchComponent } from '@ta9/shared/ta9-forms/components';
import { Mode } from '@ta9/home/models';

@Component({
  selector: 'utils-bar',
  standalone: true,
  imports: [
    CommonModule,
    Ta9FormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './utils-bar.component.html',
  styleUrls: ['./utils-bar.component.scss']
})
export class UtilsbarComponent {
  @ViewChild(InputSearchComponent, { static: true }) searchbox: InputSearchComponent;
  
  @Output() plus: EventEmitter<void> = new EventEmitter();
  @Output() rows: EventEmitter<void> = new EventEmitter();
  @Output() grid: EventEmitter<void> = new EventEmitter();
  @Output() search: EventEmitter<string> = new EventEmitter();

  @Input() mode: Mode;

  modeTypes: typeof Mode = Mode;
}