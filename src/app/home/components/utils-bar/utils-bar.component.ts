import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ta9FormsModule } from '@ta9/shared/ta9-forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

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
  keyword: string;
}