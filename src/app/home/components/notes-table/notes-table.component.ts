import { AfterContentChecked, AfterContentInit, Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

import { INote } from '@ta9/home/models';
import { HighlightPipe as HighlightPipeModule } from '@ta9/shared/pipes';

const DISPLAYED_COLUMNS: string[] = ['color', 'name', 'createdAt', 'lastUpdate', 'createdBy'];

@Component({
  selector: 'notes-table',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    HighlightPipeModule
  ],
  templateUrl: './notes-table.component.html',
  styleUrls: ['./notes-table.component.scss']
})
export class NotesTableComponent  implements OnChanges {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() notes: INote[] = [];
  @Input() highlighted: string;

  @Output() note: EventEmitter<INote> = new EventEmitter();
  
  displayedColumns: string[] = DISPLAYED_COLUMNS;
  dataSource = new MatTableDataSource<INote>(this.notes);

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<INote>(this.notes);
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
