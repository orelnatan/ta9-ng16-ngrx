import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

import { 
  InputTextComponent,
  InputSearchComponent,
  InputTextareaComponent,
  InputRadioComponent,
  ChecklistSingleComponent,
  InputColorComponent,
  InputsContainerComponent,
  InputFieldComponent,
  PrimaryButtonComponent,
} from './components';

@NgModule({
  declarations: [
    InputTextComponent,
    InputSearchComponent,
    InputTextareaComponent,
    InputRadioComponent,
    ChecklistSingleComponent,
    InputColorComponent,
    InputsContainerComponent,
    InputFieldComponent,
    PrimaryButtonComponent,
  ],
  imports: [ 
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule
  ],
  exports: [
    InputTextComponent,
    InputSearchComponent,
    InputTextareaComponent,
    InputRadioComponent,
    ChecklistSingleComponent,
    InputColorComponent,
    InputsContainerComponent,
    InputFieldComponent,
    PrimaryButtonComponent,
  ]
})
export class Ta9FormsModule {}