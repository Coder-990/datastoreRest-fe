import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemReceipt} from "../../../models/item-receipt";
import {ServiceItemReceipt} from "../../../services/service-item-receipt.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {ItemReceiptAddComponent} from "../item-receipt-add/item-receipt-add.component";
import {
  CancelItemReceiptCancelComponent
} from "../../cancelItemReceiptComponents/cancel-item-receipt-cancel/cancel-item-receipt-cancel.component";

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

  displayedColumns: string[] = [ID, COMPANY, ARTICLE, AMOUNT, CANCELLATION];
  itemReceiptList: ItemReceipt[] = [];
  dataSource: MatTableDataSource<ItemReceipt>;

  constructor(private service: ServiceItemReceipt, private dialog:MatDialog) {
    this.dataSource = new MatTableDataSource<ItemReceipt>(this.itemReceiptList);
  }

  ngOnInit(): void {
   this.ngGetAll();
  }

  private ngGetAll() {
    this.service.getAllItemReceipts().subscribe(itemCancellation => {
      this.itemReceiptList = itemCancellation.filter(isNotCancelled => !isNotCancelled.storno)
      this.dataSource = new MatTableDataSource<ItemReceipt>(this.itemReceiptList);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAddNewItemReceipt() {
    const dialogRef = this.dialog.open(ItemReceiptAddComponent, {
      width: '20%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngCancelItemReceipt() {
    const dialogRef = this.dialog.open(CancelItemReceiptCancelComponent, {
      width: '20%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
