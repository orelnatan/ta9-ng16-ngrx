import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ta9FormsModule } from '@ta9/shared/ta9-forms';

@Component({
  selector: 'url-go-bar',
  standalone: true,
  imports: [
    CommonModule,
    Ta9FormsModule
  ],
  templateUrl: './url-go-bar.component.html',
  styleUrls: ['./url-go-bar.component.scss']
})
export class UrlGoBarComponent {}
