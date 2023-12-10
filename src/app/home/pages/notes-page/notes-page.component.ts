import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';

import { 
  NotesGridComponent as NotesGridModule,
  NotesRowsComponent as NotesRowsModule,
  UtilsbarComponent as UtilsbarModule }
from '@ta9/home/components';
import { HomeActions, HomeSelectors } from '@ta9/home/store';
import { INote, Mode } from '@ta9/home/models';
import { LayoutModule } from '@ta9/shared/layout';

import { AppState } from 'src/app/store';
import { Ta9FormsModule } from '@ta9/shared/ta9-forms';
import { PaginatorModule } from '@ta9/shared/components';

@Component({
  selector: 'notes-page',
  standalone: true,
  imports: [
    CommonModule,
    NgxPaginationModule,
    LayoutModule,
    NotesRowsModule,
    NotesGridModule,
    UtilsbarModule,
    Ta9FormsModule,
    PaginatorModule
  ],
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {
  notes$: Observable<INote[]>;
  mode$: Observable<Mode>;

  currentPage: number = 1;
  itemsPerPage: number = 5;
  modeTypes: typeof Mode = Mode;

  constructor(
    private readonly store$: Store<AppState>
  ) {
    this.notes$ = this.store$.select(
      HomeSelectors.getNotes()
    );

    this.mode$ = this.store$.select(
      HomeSelectors.getMode
    );
  }

  ngOnInit(): void {
    this.store$.dispatch(new HomeActions.Fetch());
  }

  filterByKeyword(keyword?: string): void {
    this.currentPage = 1;

    this.notes$ = this.store$.select(
      HomeSelectors.getNotes(keyword)
    );
  }

  dispatchEdit(note?: INote): void {
    this.store$.dispatch(new HomeActions.Edit({
      note: note || {} as INote
    }));
  }

  dispatchFilter(keyword: string): void {
    this.store$.dispatch(new HomeActions.Filter({
      keyword
    }));
  }

  dispatchMode(mode: Mode): void {
    this.store$.dispatch(new HomeActions.Layout({
      mode: mode
    }));
  }
}
