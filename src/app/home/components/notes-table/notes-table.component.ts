import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

import { INote } from '@ta9/home/models';

const DISPLAYED_COLUMNS: string[] = ['color', 'name', 'createdAt', 'lastUpdate', 'createdBy'];

@Component({
  selector: 'notes-table',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './notes-table.component.html',
  styleUrls: ['./notes-table.component.scss']
})
export class NotesTableComponent  implements OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() notes: INote[] = [];
  
  displayedColumns: string[] = DISPLAYED_COLUMNS;
  dataSource = new MatTableDataSource<INote>(this.notes);

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<INote>(this.notes);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
