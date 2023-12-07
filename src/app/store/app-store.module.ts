import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HomeStoreModule } from '@ta9/home/store';

@NgModule({
    imports: [
      CommonModule,
      HomeStoreModule,
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument({
          maxAge: 25, 
      }),
    ]
  })
  export class AppStoreModule {}


