import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';

import { 
  NotesGridModule,
  NotesRowsModule,
  UrlGoBarModule,
  UtilsbarModule }
from '@ta9/home/components';
import { HomeSelectors, HomeActions } from '@ta9/home/store';
import { INote, Mode } from '@ta9/home/models';
import { LayoutModule } from '@ta9/shared/layout';
import { LoaderModule, PaginatorModule } from '@ta9/shared/components';

import { AppState } from 'src/app/store';

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
    PaginatorModule,
    LoaderModule,
    UrlGoBarModule
  ],
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this.store$.dispatch(HomeActions.fetch());
  }

  filterByKeyword(keyword?: string): void {
    this.currentPage = 1;

    this.notes$ = this.store$.select(
      HomeSelectors.getNotes(keyword)
    );
  }

  dispatchEdit(note?: INote): void {
    this.store$.dispatch(HomeActions.edit({
      note: note || {} as INote
    }))
  }

  dispatchMode(mode: Mode): void {
    this.store$.dispatch(HomeActions.layout({
      mode
    }));
  }
}
