import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavbarComponent {}
