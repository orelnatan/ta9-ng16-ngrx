import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'slider',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @ViewChild(MatDrawer, { static: true }) drawer: MatDrawer;

  toggle(): void {
    this.drawer.toggle();
  }
}
