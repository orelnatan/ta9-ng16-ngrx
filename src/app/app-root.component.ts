import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppNavbarModule } from './core/components';
import { LayoutModule } from './shared/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    AppNavbarModule
  ],
  template: `
    <root-layout [forRoot]="true">
      <layout-header>
        <app-navbar />
      </layout-header>

      <router-outlet />
    </root-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppRootComponent {}
