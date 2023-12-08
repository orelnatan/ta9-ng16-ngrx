import { Actions, HomeActionTypes } from './home.actions';

import { HomeState } from './home-state.model';

const initialState: HomeState = {
  notes: [],
  loading: false,
  alert: null
}

export function homeReducer(state = initialState, action: Actions): HomeState {
  switch(action.type) {
    case HomeActionTypes.FETCH: {
      return {
        ... state,
        loading: true
      };
    };
    case HomeActionTypes.READY: {
      return {
        ... state,
        notes: action.payload.notes,
        loading: false
      };
    };
    case HomeActionTypes.FAILURE: {
      return {
        ... state,
        loading: false,
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


