import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subject, debounceTime } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { BaseErrorStateMatcher } from '../../classes';

@UntilDestroy()
@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
})
export class InputSearchComponent {
  @Input() value: string;
  @Input() control: FormControl;
  @Input() validation: string;
  @Input() placeholder: string;
 
  matcher: ErrorStateMatcher = new BaseErrorStateMatcher();
  
  @Output() onsearch: EventEmitter<string> = new EventEmitter();

  subject$: Subject<string> = new Subject();

  constructor() {     
    this.subject$.pipe(
      untilDestroyed(this),
      debounceTime(600)
    ).subscribe((value: string) => {
      this.onsearch.emit(value);
    })
  }
}