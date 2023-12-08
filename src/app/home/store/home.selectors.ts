import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HomeState } from './home-state.model';
import { INote } from '../models';

export const getHomeState = createFeatureSelector<HomeState>('home');

export const getNotes = createSelector(
  getHomeState,
  (state: HomeState): INote[] => {
      return state.notes;
  }
);

export const getLoading = createSelector(
  getHomeState,
  (state: HomeState): boolean => {
      return state.loading;
  }
);