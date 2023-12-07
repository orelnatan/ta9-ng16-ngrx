import { Actions, HomeActionTypes } from './home.actions';

import { HomeState } from './home-state.model';

const initialState: HomeState = {
  
}

export function homeReducer(state = initialState, action: Actions): HomeState {
  switch(action.type) {
       
    default: {
      return {
        ... state
      }
    };
  }
}


