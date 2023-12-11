import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { NotesService } from '../services';
import { INote } from '../models';

import * as HomeActions from './home.actions';

const SUCCESS_SNACK_CONFIG: MatSnackBarConfig = {
  panelClass: ["snak-success-state"],
  horizontalPosition: "left",
  duration: 7000
}

const ERROR_SNACK_CONFIG: MatSnackBarConfig = {
  panelClass: ["snak-error-state"],
  horizontalPosition: "left",
  duration: 8000
}

@Injectable()
export class HomeEffects {
  constructor(
    private readonly notesService: NotesService,
    private readonly actions$: Actions,
    private readonly matSnackbar: MatSnackBar,
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

  readonly success$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<HomeActions.Update | HomeActions.Create>(
        HomeActions.HomeActionTypes.UPDATE, HomeActions.HomeActionTypes.CREATE
      ),
      tap((): void => { 
        this.matSnackbar.open("Successfully done!", undefined, SUCCESS_SNACK_CONFIG);
      })
    )
  }, { dispatch: false })

  readonly failure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<HomeActions.Failure>(
        HomeActions.HomeActionTypes.FAILURE
      ),
      tap((action: HomeActions.Failure): void => { 
        this.matSnackbar.open(action.payload.error.message, undefined, ERROR_SNACK_CONFIG);
      })
    )
  }, { dispatch: false })
}

