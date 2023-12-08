import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { 
  InputColorComponent,
  InputSearchComponent,
  InputTextComponent,
  InputTextareaComponent,
} from './components';

@NgModule({
  declarations: [
    InputTextComponent,
    InputSearchComponent,
    InputTextareaComponent,
    InputColorComponent
  ],
  imports: [ 
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    InputTextComponent,
    InputSearchComponent,
    InputTextareaComponent,
    InputColorComponent
  ]
})
export class Ta9FormsModule {}