import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HomeEffects } from './home.effects';
import { homeReducer } from './home.reducer';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([ HomeEffects ]),
  ]
})
export class HomeStoreModule {}


