import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HomeState } from './home-state.model';
import { INote } from '../models';
import { filter } from './utils';

export const getHomeState = createFeatureSelector<HomeState>('home');

// Parameterized NgRx Selectors
export const getNotes = (keyword?: string) => createSelector(
  getHomeState,
  (state: HomeState): INote[] => { 
    return filter(state.notes!, keyword!);
  }
);

export const getNote = createSelector(
  getHomeState,
  (state: HomeState): INote => {
    return { ...state.note! };
  }
);

export const getSlider = createSelector(
  getHomeState,
  (state: HomeState): boolean => {
    return state.slider;
  }
);
