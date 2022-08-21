import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ItemReceiptDTO} from "../../../models/item-receipt";
import {ServiceItemReceipt} from "../../../services/service-item-receipt.service";

const ID = 'ID';
const COMPANY = 'Company';
const ARTICLE = 'Article';
const AMOUNT = 'Amount';
const CANCELLATION_DATE = 'Cancellation_date';

@Component({
  selector: 'app-cancel-item-receipt-view',
  templateUrl: './cancel-item-receipt-view.component.html',
  styleUrls: ['./cancel-item-receipt-view.component.scss']
})
export class CancelItemReceiptViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  displayedColumns: string[] = [ID, COMPANY, ARTICLE, AMOUNT, CANCELLATION_DATE];
  cancelItemReceiptsList: ItemReceiptDTO[] = [];
  dataSource: MatTableDataSource<ItemReceiptDTO>;

  constructor(private service: ServiceItemReceipt) {
    this.dataSource = new MatTableDataSource<ItemReceiptDTO>(this.cancelItemReceiptsList);
  }

  ngOnInit(): void {
   this.ngGetAll();
  }

  private ngGetAll() {
    this.service.getAllItemReceipts().subscribe(itemCancellation => {
      this.cancelItemReceiptsList = itemCancellation.filter(isCancelled => isCancelled.storno)
      this.dataSource = new MatTableDataSource<ItemReceiptDTO>(this.cancelItemReceiptsList);
      this.dataSource.paginator = this.paginator;
    });
  }
}
