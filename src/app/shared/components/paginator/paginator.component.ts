import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { Ta9FormsModule } from '@ta9/shared/ta9-forms';
import { IRadioItem } from '@ta9/shared/ta9-forms/models';

@Component({
  selector: 'paginator',
  standalone: true,
  imports: [
    NgxPaginationModule,
    Ta9FormsModule
  ],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {
  @Input() itemsPerPage: number;

  @Output() currentPageChange: EventEmitter<number> = new EventEmitter();
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter();

  sizes: IRadioItem[] = [
    {
      value: 5,
      placeholder: "5"
    },
    {
      value: 10,
      placeholder: "10"
    },
    {
      value: 15,
      placeholder: "15"
    },
    {
      value: 20,
      placeholder: "20"
    },
    {
      value: 25,
      placeholder: "25"
    }
  ];

  handleSizeChange(size: number): void {
    this.currentPageChange.emit(1);
    this.pageSizeChange.emit(size);
  }
}
