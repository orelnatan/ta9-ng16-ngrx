import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent {
  @Input() dosubmit: boolean;
  @Input() placeholder: string;
  @Input() palette: ThemePalette;
 
  @Output() onclick: EventEmitter<MouseEvent> = new EventEmitter();
}