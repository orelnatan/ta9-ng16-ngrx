import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatInput } from '@angular/material/input';

const DEBOUNCE_TIME: number = 600;

@UntilDestroy()
@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
})
export class InputSearchComponent { 
  @Input() placeholder: string;
  
  @Output() onsearch: EventEmitter<string> = new EventEmitter();

  subject$: Subject<string> = new Subject();
  value: string;

  constructor() {     
    this.subject$.pipe(
      untilDestroyed(this),
      debounceTime(DEBOUNCE_TIME)
    ).subscribe((value: string) => {
      this.value = value;

      this.onsearch.emit(value);
    })
  }
}