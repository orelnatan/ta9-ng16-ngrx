import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutFooterComponent {}
