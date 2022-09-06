import {Component, OnInit, ViewChild} from '@angular/core';
import {ReceiptDTO} from "../../../../models/receipt";
import {ServiceReceipt} from "../../../../services/service-receipt.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ReceiptAddComponent} from "../receipt-add/receipt-add.component";
import {MatDialog} from "@angular/material/dialog";
import {ReceiptDeleteComponent} from "../receipt-delete/receipt-delete.component";
import {MatSort} from "@angular/material/sort";

const ID = 'ID';
const DATE = 'Date';
const COMPANY = 'Company';
const ACTION = 'Action';

@Component({
  selector: 'app-receipt-view',
  templateUrl: './receipt-view.component.html',
  styleUrls: ['./receipt-view.component.scss']
})
export class ReceiptViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  displayedColumns: string[] = [ID, DATE, COMPANY, ACTION];
  receiptsList: ReceiptDTO[] = [];
  dataSource: MatTableDataSource<ReceiptDTO>;
  buttonDelete: string = "Delete";
  resultSave: string = 'save';
  resultDelete: string = 'delete';
  private dialogRef: any;
  noMatch: string = "No data matching the filter";

  constructor(private service: ServiceReceipt, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<ReceiptDTO>(this.receiptsList);
  }

  ngOnInit(): void {
    this.ngGetAll();
  }

  ngGetAll() {
    this.service.getAllReceipts().subscribe(receipts => {
      this.receiptsList = receipts;
      this.dataSource = new MatTableDataSource<ReceiptDTO>(this.receiptsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngAddReceipt() {
    this.dialogRef = this.dialog
      .open(ReceiptAddComponent, {width: '20%'});
    this.ngDialogResultAfterClose(this.resultSave);
  }

  ngDeleteReceipt(id: number) {
    this.dialogRef = this.dialog
      .open(ReceiptDeleteComponent, {width: '20%', data: id});
    this.ngDialogResultAfterClose(this.resultDelete);
  }

  ngDialogResultAfterClose(action: string) {
    this.dialogRef.afterClosed().subscribe((result: string) => {
      if (result === action) this.ngGetAll()
      console.log(`Dialog result: ${result}`);
    });
  }

  ngApplyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    let paginator = this.dataSource.paginator;
    if (paginator) paginator.firstPage();
  }
}
