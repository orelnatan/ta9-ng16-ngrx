import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LayoutModule } from '@ta9/shared/layout';
import { SliderModule } from '@ta9/shared/components';

import { AppState } from '../store';
import { HomeActions, HomeSelectors } from './store';
import { NoteFormModule } from './components';
import { INote } from './models';

@Component({
  selector: 'home-root',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    SliderModule,
    NoteFormModule
  ],
  template: `
    <root-layout>
      <slider #slider>
        <ng-container inner-content>
          <note-form *ngIf="slider.open$ | async"
            [note]="(note$ | async)!"
            (update)="dispatchUpdate($event)"
            (create)="dispatchCreate($event)"
            (cancel)="slider.slideOut()"
          />
        </ng-container>
        
        <ng-container external-content>
          <router-outlet />
        </ng-container>
      </slider>
    </root-layout>
  `,
})
export class HomeRootComponent {
  @ViewChild(SliderModule) slider: SliderModule;
  
  note$: Observable<INote>;

  constructor(
    private readonly store$: Store<AppState>
  ) {
    this.note$ = this.store$.select(
      HomeSelectors.getNote
    );
  }

  dispatchUpdate(note: INote): void {
    this.slider.slideOut();

    this.store$.dispatch(HomeActions.update({
      note
    }));
  }

  dispatchCreate(note: INote): void {
    this.slider.slideOut();

    this.store$.dispatch(HomeActions.create({ 
      note
    }));
  }
}