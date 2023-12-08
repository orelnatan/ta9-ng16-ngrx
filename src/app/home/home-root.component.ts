import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ta9/shared/layout';

@Component({
  selector: 'home-root',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
  ],
  template: `
    <root-layout>
      <router-outlet />
    </root-layout>
  `,
})
export class HomeRootComponent {}