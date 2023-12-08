import { Injectable, Injector } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as HomeActions from './home.actions';
import { NotesService } from '../services';
import { INote } from '../models';

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
            return new HomeActions.Ready({ notes: notes })
          }),
          catchError(error => of(
            new HomeActions.Failure({ error }))),
        )
      })  
    )
  })
}

