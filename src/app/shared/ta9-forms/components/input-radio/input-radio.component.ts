import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
})
export class InputRadioComponent<T> {
  @Input() value: string | number;
  @Input() placeholder: string;

  @Output() onchange: EventEmitter<T> = new EventEmitter();
}