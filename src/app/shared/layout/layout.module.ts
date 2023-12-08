import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { 
  RootLayoutComponent,
  PageLayoutComponent, 
  LayoutHeaderComponent,
} from './components';

@NgModule({
  declarations: [
    RootLayoutComponent,
    PageLayoutComponent, 
    LayoutHeaderComponent,
  ],
  imports: [ 
    CommonModule,
    RouterModule,
  ],
  exports: [
    RootLayoutComponent,
    PageLayoutComponent, 
    LayoutHeaderComponent,
  ]
})
export class LayoutModule {}