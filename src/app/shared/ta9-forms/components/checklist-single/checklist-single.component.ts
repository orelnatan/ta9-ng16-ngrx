import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IRadioItem } from '../../models';

@Component({
  selector: 'checklist-single',
  templateUrl: './checklist-single.component.html',
  styleUrls: ['./checklist-single.component.scss']
})
export class ChecklistSingleComponent<T> {
  @Input() value: T;
  @Input() items: IRadioItem[] = [];
  @Input() placeholder: string;
  
  @Output() onchange: EventEmitter<T> = new EventEmitter();
}