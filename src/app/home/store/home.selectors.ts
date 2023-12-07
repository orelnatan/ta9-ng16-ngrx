import { createFeatureSelector } from '@ngrx/store';

import { HomeState } from './home-state.model';

export const getHomeState = createFeatureSelector<HomeState>('home');

