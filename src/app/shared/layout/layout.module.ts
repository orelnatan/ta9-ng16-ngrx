import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { 
  RootLayoutComponent,
  PageLayoutComponent, 
  LayoutHeaderComponent,
  LayoutSidebarComponent,
} from './components';

@NgModule({
  declarations: [
    RootLayoutComponent,
    PageLayoutComponent, 
    LayoutHeaderComponent,
    LayoutSidebarComponent,
  ],
  imports: [ 
    CommonModule,
    RouterModule,
  ],
  exports: [
    RootLayoutComponent,
    PageLayoutComponent, 
    LayoutHeaderComponent,
    LayoutSidebarComponent,
  ]
})
export class LayoutModule {}