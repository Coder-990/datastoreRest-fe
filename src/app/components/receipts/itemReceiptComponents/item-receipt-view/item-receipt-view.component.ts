import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemReceiptDTO} from "../../../../models/item-receipt";
import {ServiceItemReceipt} from "../../../../services/service-item-receipt.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {ItemReceiptAddComponent} from "../item-receipt-add/item-receipt-add.component";
import {ItemReceiptCancelComponent} from "../item-receipt-cancel/item-receipt-cancel.component";
import {MatSort} from "@angular/material/sort";

const ID = 'ID';
const COMPANY = 'Company';
const ARTICLE = 'Article';
const AMOUNT = 'Amount';
const CANCELLATION = 'Cancellation';

@Component({
  selector: 'app-item-receipt-view',
  templateUrl: './item-receipt-view.component.html',
  styleUrls: ['./item-receipt-view.component.scss']
})
export class ItemReceiptViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  displayedColumns: string[] = [ID, COMPANY, ARTICLE, AMOUNT, CANCELLATION];
  itemReceiptList: ItemReceiptDTO[] = [];
  dataSource: MatTableDataSource<ItemReceiptDTO>;
  buttonCancel: string = "Cancel";
  resultSave: string = 'save';
  resultCancel: string = 'update';
  noMatch: string = "No data matching the filter";
  private dialogRef: any;

  constructor(private service: ServiceItemReceipt, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<ItemReceiptDTO>(this.itemReceiptList);
  }

  ngOnInit(): void {
    this.ngGetAll();
  }

  private ngGetAll() {
    this.service.getAllItemReceipts().subscribe(itemCancellation => {
      this.itemReceiptList = itemCancellation.filter(isNotCancelled => !isNotCancelled.storno)
      this.dataSource = new MatTableDataSource<ItemReceiptDTO>(this.itemReceiptList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAddItemReceipt() {
    this.dialogRef = this.dialog.open(ItemReceiptAddComponent, {width: '20%'});
    this.ngDialogResultAfterClose(this.resultSave);
  }

  ngCancelItemReceipt(id: number) {
    this.dialogRef = this.dialog.open(ItemReceiptCancelComponent, {width: '20%', data: id});
    this.ngDialogResultAfterClose(this.resultCancel);
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
