import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: [`./input-field.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFieldComponent {
  @Input() gap: number;
}