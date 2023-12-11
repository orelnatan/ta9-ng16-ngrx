import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { INote, Mode } from '../models';

enum HomeActionTypes {
  Fetch = "[HOME] Fetch",
  Ready = "[HOME] Ready",
  Edit = "[HOME] Edit",
  Update = "[HOME] Update",
  Create = "[HOME] Create",
  Toggle = "[HOME] Toggle",
  Layout = "[HOME] Layout",
  Failure = "[HOME] Failure"
}

export const fetch = createAction(
  HomeActionTypes.Fetch,
);

export const ready = createAction(
  HomeActionTypes.Ready,
  props<{ notes: INote[] }>()
);

export const edit = createAction(
  HomeActionTypes.Edit,
  props<{ note: INote }>()
);

export const toggle = createAction(
  HomeActionTypes.Toggle,
  props<{ slider: boolean }>()
);

export const update = createAction(
  HomeActionTypes.Update,
  props<{ note: INote }>()
);

export const create = createAction(
  HomeActionTypes.Create,
  props<{ note: INote }>()
);

export const failure = createAction(
  HomeActionTypes.Failure,
  props<{ error: HttpErrorResponse }>()
);

export const layout = createAction(
  HomeActionTypes.Layout,
  props<{ mode: Mode }>()
);
