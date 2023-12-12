import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'inputs-container',
  templateUrl: './inputs-container.component.html',
  styleUrls: [`./inputs-container.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputsContainerComponent {
  @Input() gap: number;
}