import {Component, OnInit, ViewChild} from '@angular/core';
import {ReceiptDTO} from "../../../models/receipt";
import {ServiceReceipt} from "../../../services/service-receipt.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ReceiptAddComponent} from "../receipt-add/receipt-add.component";
import {MatDialog} from "@angular/material/dialog";

const ID = 'ID';
const DATE = 'Date';
const COMPANY = 'Company';
const EDIT_DELETE = 'Edit/Delete';

@Component({
  selector: 'app-receipt-view',
  templateUrl: './receipt-view.component.html',
  styleUrls: ['./receipt-view.component.scss']
})
export class ReceiptViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  displayedColumns: string[] = [ID, DATE, COMPANY, EDIT_DELETE];
  receiptsList: ReceiptDTO[] = [];
  dataSource: MatTableDataSource<ReceiptDTO>;

  constructor(private service: ServiceReceipt, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<ReceiptDTO>(this.receiptsList);
  }

  ngOnInit(): void {
    this.ngGetAll();
  }

  ngGetAll() {
    this.service.getAllReceipts().subscribe(receipt => {
      this.receiptsList = receipt;
      this.dataSource = new MatTableDataSource<ReceiptDTO>(this.receiptsList);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAddNewReceipt() {
    const dialogRef = this.dialog.open(ReceiptAddComponent, {
      width: '20%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
