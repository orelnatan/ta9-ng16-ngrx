import { Injectable } from '@angular/core';
import { catchError, delay, map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { NotesService } from '../services';
import { INote } from '../models';
import { filter } from './utils';

import * as HomeActions from './home.actions';

@Injectable()
export class HomeEffects {
  constructor(
    private readonly notesService: NotesService,
    private readonly actions$: Actions,
  ) {}

  readonly fetch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<HomeActions.Fetch>(
        HomeActions.HomeActionTypes.FETCH
      ),
      mergeMap((): Observable<HomeActions.Ready | HomeActions.Failure> => {
        return this.notesService.fetch().pipe(
          map((notes: INote[]): HomeActions.Ready => {
            return new HomeActions.Ready({ notes })
          }),
          catchError(error => of(
            new HomeActions.Failure({ error }))),
        )
      })  
    )
  })

  readonly edit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<HomeActions.Edit>(
        HomeActions.HomeActionTypes.EDIT
      ),
      mergeMap((): Observable<HomeActions.Toggle> => {
        return of(new HomeActions.Toggle({ slider: true }));
      })  
    )
  })
}

