import { createReducer, on } from '@ngrx/store';

import { add, update } from './utils';
import { HomeState } from './home-state.model';
import { Mode } from '../models';

import * as HomeActions from './home.actions';

const initialState: HomeState = {
  notes: null,
  note: null,
  slider: false,
  mode: Mode.Rows,
}

export const homeReducer = createReducer(
  initialState,
  on(HomeActions.fetch, (state: HomeState) => ({
    ...state,
  })),
  on(HomeActions.ready, (state: HomeState, { notes }) => ({
    ...state,
    notes: notes,
  })),
  on(HomeActions.edit, (state: HomeState, { note }) => ({
    ...state,
    note
  })),
  on(HomeActions.toggle, (state: HomeState, { slider }) => ({
    ...state,
    slider
  })),
  on(HomeActions.update, (state: HomeState, { note }) => ({
    ...state,
    notes: [...update([...state.notes!], {...note})]
  })),
  on(HomeActions.create, (state: HomeState, { note }) => ({
    ...state,
    notes: [...add([...state.notes!], {...note})]
  })),
  on(HomeActions.layout, (state: HomeState, { mode }) => ({
    ...state,
    mode
  })),
  on(HomeActions.failure, (state: HomeState) => ({
    ...state,
  })),
);
