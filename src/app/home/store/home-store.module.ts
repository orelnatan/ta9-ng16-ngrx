import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeEffects } from './home.effects';
import { homeReducer } from './home.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([ HomeEffects ]),
  ]
})
export class HomeStoreModule {}


