import { ProviderToken } from '@angular/core';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum HomeActionTypes {
  FETCH = "[HOME] Fetch",
}

export class Fetch implements Action {
  readonly type = HomeActionTypes.FETCH;

  constructor(){}
}

export type Actions = Fetch;