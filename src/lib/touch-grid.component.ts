
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'touch-grid',
  templateUrl: './touch-grid.component.html',
  styleUrls: ['./touch-grid.component.scss'],

})

export class TouchGridComponent implements OnInit {
  @Input() data: any;
  @Input() columns!: GridColumn[];
  @Input() loading: boolean = false;
  @Input() showEditButton: boolean = false;
  @Input() showDeleteButton: boolean = false;

  // paging
  @Input() showPaging: boolean = false;
  @Input() currentPage!: number;
  @Input() pageSize!: number;
  @Input() itemsCount!: number;

  // events
  @Output() onRowClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCellClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeleteClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPageClicked: EventEmitter<any> = new EventEmitter<any>();

  public red = "red";
  public setRowBackground: any | undefined;

  constructor() { }

  ngOnInit(): void { }

  getRowStyle(row: any) {
    if (this.setRowBackground !== undefined) {
      return this.setRowBackground(this.data, row);
    }
  }

  getData(row: any, column: GridColumn) {
    let rowData = row[column.name];
    if (column.formatter !== undefined) {
      rowData = column.formatter(rowData);
    }

    return rowData;
  }

  rowClicked(row: any) {
    this.onRowClicked.emit(row);
  }
  cellClicked(row: any, column: any) {
    let gridrow: GridRowColumn = { column: column, row: row };
    this.onCellClicked.emit(gridrow);
  }

  remove(row: any) {
    this.onDeleteClicked.emit(row);
  }

  edit(row: any) {
    this.onEditClicked.emit(row);
  }

  counter(i: number) {
    return new Array(i);
  }

  pageClick(page: number) {
    this.currentPage = page;
    this.onPageClicked.emit(page);
  }

  getButtonColor(pgnum: number) {
    if (pgnum === this.currentPage) {
      return this.red;
    }
    return "";
  }
}

export interface GridColumn {
  name: string;
  displayName: string;
  width: string | undefined;
  align?: string | undefined;
  formatter?: any | undefined;
}

export interface GridRowColumn {
  row: any;
  column: any;
}