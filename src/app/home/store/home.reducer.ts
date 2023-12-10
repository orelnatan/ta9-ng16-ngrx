import { Actions, HomeActionTypes } from './home.actions';

import { HomeState } from './home-state.model';
import { add, update } from './utils';
import { Mode } from '../models';

const initialState: HomeState = {
  notes: null,
  note: null,
  slider: false,
  mode: Mode.Rows,
  alert: null,
}

export function homeReducer(state = initialState, action: Actions): HomeState {
  switch(action.type) {
    case HomeActionTypes.FETCH: {
      return {
        ... state,
        notes: null
      };
    };
    case HomeActionTypes.READY: {
      return {
        ... state,
        notes: action.payload.notes,
      };
    };
    case HomeActionTypes.EDIT: {
      return {
        ... state,
        note: action.payload.note
      };
    };
    case HomeActionTypes.UPDATE: {
      return {
        ... state,
        notes: [...update([...state.notes!], {...action.payload.note})]
      };
    };
    case HomeActionTypes.CREATE: {
      return {
        ... state,
        notes: [...add([...state.notes!], {...action.payload.note})]
      };
    };
    case HomeActionTypes.TOGGLE: {
      return {
        ... state,
        slider: action.payload.slider
      };
    };
    case HomeActionTypes.FILTER: {
      return {
        ... state,
      };
    };
    case HomeActionTypes.LAYOUT: {
      return {
        ... state,
        mode: action.payload.mode
      };
    };
    case HomeActionTypes.FAILURE: {
      return {
        ... state,
        alert: action.payload.error.message
      };
    };
    default: {
      return {
        ... state
      }
    };
  }
}


