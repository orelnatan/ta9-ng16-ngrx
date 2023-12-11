import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { 
  RootLayoutComponent,
  PageLayoutComponent, 
  LayoutHeaderComponent,
  LayoutFooterComponent,
} from './components';

@NgModule({
  declarations: [
    RootLayoutComponent,
    PageLayoutComponent, 
    LayoutHeaderComponent,
    LayoutFooterComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule,
  ],
  exports: [
    RootLayoutComponent,
    PageLayoutComponent, 
    LayoutHeaderComponent,
    LayoutFooterComponent
  ]
})
export class LayoutModule {}