import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AppNavbarComponent as AppNavbarModule } from './core/components';
import { LayoutModule } from './shared/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LayoutModule,
    AppNavbarModule
  ],
  template: `
    <root-layout [forRoot]="true">
      <layout-header header-primary>
        <app-navbar />
      </layout-header>

      <router-outlet />
    </root-layout>
  `,
})
export class AppRootComponent {}
