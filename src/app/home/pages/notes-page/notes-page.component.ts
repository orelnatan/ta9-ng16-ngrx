import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { HomeActions, HomeSelectors } from '@ta9/home/store';
import { NotesTableComponent as NotesTableModule } from '@ta9/home/components';
import { INote } from '@ta9/home/models';
import { LayoutModule } from '@ta9/shared/layout';

import { AppState } from 'src/app/store';

@Component({
  selector: 'notes-page',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    NotesTableModule
  ],
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {
  notes$: Observable<INote[]>;

  constructor(
    private readonly store$: Store<AppState>
  ) {
    this.notes$ = this.store$.select(
      HomeSelectors.getNotes
    );
  }

  ngOnInit(): void {
    this.store$.dispatch(new HomeActions.Fetch());
  }
}
