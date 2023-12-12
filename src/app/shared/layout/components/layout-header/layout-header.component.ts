import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutHeaderComponent {}
