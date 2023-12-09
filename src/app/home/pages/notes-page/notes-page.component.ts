import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { HomeActions, HomeSelectors } from '@ta9/home/store';
import { NotesTableComponent as NotesTableModule, UtilsbarComponent as UtilsbarModule } from '@ta9/home/components';
import { INote } from '@ta9/home/models';
import { LayoutModule } from '@ta9/shared/layout';

import { AppState } from 'src/app/store';

@Component({
  selector: 'notes-page',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    NotesTableModule,
    UtilsbarModule,
  ],
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {
  notes$: Observable<INote[]>;

  constructor(
    private readonly store$: Store<AppState>
  ) {
    this.selectNotes();
  }

  ngOnInit(): void {
    this.dispatchFetch();
  }

  selectNotes(keyword?: string): void {
    this.notes$ = this.store$.select(
      HomeSelectors.getNotes(keyword)
    );
  }

  dispatchFetch(): void {
    this.store$.dispatch(new HomeActions.Fetch());
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
}
