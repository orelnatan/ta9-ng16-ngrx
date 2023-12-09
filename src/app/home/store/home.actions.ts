import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { INote } from '../models';

export enum HomeActionTypes {
  FETCH = "[HOME] Fetch",
  READY = "[HOME] Ready",
  EDIT = "[HOME] Edit",
  UPDATE = "[HOME] Update",
  CREATE = "[HOME] Create",
  TOGGLE = "[HOME] Toggle",
  FILTER = "[HOME] Filter",
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

export class Edit implements Action {
  readonly type = HomeActionTypes.EDIT;

  constructor(public payload: {
		note: INote,
	}){}
}

export class Update implements Action {
  readonly type = HomeActionTypes.UPDATE;

  constructor(public payload: {
		note: INote,
	}){}
}

export class Create implements Action {
  readonly type = HomeActionTypes.CREATE;

  constructor(public payload: {
		note: INote,
	}){}
}

export class Toggle implements Action {
  readonly type = HomeActionTypes.TOGGLE;

  constructor(public payload: {
		slider: boolean,
	}){}
}

export class Filter implements Action {
  readonly type = HomeActionTypes.FILTER;

  constructor(public payload: {
		keyword: string,
	}){}
}

export class Failure implements Action {
  readonly type = HomeActionTypes.FAILURE;

  constructor(public payload: {
		error: HttpErrorResponse,
	}){}
}

export type Actions = Fetch | Ready | Edit | Update | Create | Toggle | Filter | Failure;