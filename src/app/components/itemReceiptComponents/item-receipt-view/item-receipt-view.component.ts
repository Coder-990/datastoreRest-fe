import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemReceipt} from "../../../models/item-receipt";
import {ServiceItemReceiptService} from "../../../services/service-item-receipt.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Company} from "../../../models/company";

const ID = 'ID';
const COMPANY = 'Company';
const ARTICLE = 'Article';
const AMOUNT = 'Amount';
const EDIT_DELETE = 'Edit/Delete';

@Component({
  selector: 'app-item-receipt-view',
  templateUrl: './item-receipt-view.component.html',
  styleUrls: ['./item-receipt-view.component.scss']
})
export class ItemReceiptViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  displayedColumns: string[] = [ID, COMPANY, ARTICLE, AMOUNT, EDIT_DELETE];
  itemReceiptList: ItemReceipt[] = [];
  dataSource: MatTableDataSource<ItemReceipt>;

  constructor(private service: ServiceItemReceiptService) {
    this.dataSource = new MatTableDataSource<ItemReceipt>(this.itemReceiptList);
  }

  ngOnInit(): void {
    this.service.getAllItemReceipts().subscribe(itemCancellation => {
      this.itemReceiptList = itemCancellation.filter(isNotCancelled => !isNotCancelled.storno)
      this.dataSource = new MatTableDataSource<ItemReceipt>(this.itemReceiptList);
      this.dataSource.paginator = this.paginator;
    });
  }

}
