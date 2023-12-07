import { Injectable, Injector } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as HomeActions from './home.actions';

@Injectable()
export class HomeEffects {
  constructor(
    private readonly injector: Injector,
    private readonly actions$: Actions,
  ) {}

}

