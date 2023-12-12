import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'root-layout',
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootLayoutComponent {
  @Input() forRoot: boolean;
}
