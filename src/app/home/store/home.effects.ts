import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { NotesService } from '../services';
import { INote } from '../models';

import * as HomeActions from './home.actions';

const SUCCESS_SNACK_CONFIG: MatSnackBarConfig = {
  panelClass: ["snak-success-state"],
  horizontalPosition: "left",
  duration: 2000
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
      ofType(HomeActions.fetch),
      mergeMap(() => {
        return this.notesService.fetch().pipe(
          map((notes: INote[]) => {
            return HomeActions.ready({ notes })
          }),
          catchError(error => of(
            HomeActions.failure({ error }))),
        )
      })  
    )
  })
  
  // if we move to edit mode, we will trigger the "toggle" event to open the slider
  readonly edit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.edit),
      mergeMap(() => {
        return of(HomeActions.toggle({ slider: true }));
      })  
    )
  })

  // if a note has been created or updated successfully, we will show a snack massage
  readonly success$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.update, HomeActions.create),
      tap((): void => { 
        this.matSnackbar.open("Successfully done!", undefined, SUCCESS_SNACK_CONFIG);
      })
    )
  }, { dispatch: false })

  // if for some reason the api failed, we will show a snack massage
  readonly failure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.failure),
      tap((action): void => { 
        this.matSnackbar.open(action.error.message, undefined, ERROR_SNACK_CONFIG);
      })
    )
  }, { dispatch: false })
}

