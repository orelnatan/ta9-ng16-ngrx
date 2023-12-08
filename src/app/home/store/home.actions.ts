import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { INote } from '../models';

export enum HomeActionTypes {
  FETCH = "[HOME] Fetch",
  READY = "[HOME] Ready",
  FAILURE = "[HOME] Failure"
}

export class Fetch implements Action {
  readonly type = HomeActionTypes.FETCH;

  constructor(){}
}

export class Ready implements Action {
  readonly type = HomeActionTypes.READY;

  constructor(public payload: {
		notes: INote[],
	}){}
}

export class Failure implements Action {
  readonly type = HomeActionTypes.FAILURE;

  constructor(public payload: {
		error: HttpErrorResponse,
	}){}
}

export type Actions = Fetch | Ready | Failure;