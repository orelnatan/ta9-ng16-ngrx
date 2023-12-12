import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HomeActions, HomeSelectors } from '@ta9/home/store';

import { AppState } from 'src/app/store';

@Component({
  selector: 'slider',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {
  open$: Observable<boolean>;

  constructor(
    private readonly store$: Store<AppState>
  ) {
    this.open$ = this.store$.select(
      HomeSelectors.getSlider
    );
  }

  public slideIn(): void {
    this.store$.dispatch(HomeActions.toggle({
      slider: true
    }));
  }

  public slideOut(): void {
    this.store$.dispatch(HomeActions.toggle({
      slider: false
    }));
  }
}
