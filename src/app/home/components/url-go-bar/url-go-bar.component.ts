import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Ta9FormsModule } from '@ta9/shared/ta9-forms';

@Component({
  selector: 'url-go-bar',
  standalone: true,
  imports: [
    Ta9FormsModule
  ],
  templateUrl: './url-go-bar.component.html',
  styleUrls: ['./url-go-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UrlGoBarComponent {}
