import {Component, OnInit} from '@angular/core';
import {ItemReceipt} from "../../../models/item-receipt";
import {ServiceItemReceiptService} from "../../../services/service-item-receipt.service";

const ID = 'ID';
const COMPANY = 'Company';
const ARTICLE = 'Article';
const AMOUNT = 'Amount';
@Component({
  selector: 'app-item-receipt-view',
  templateUrl: './item-receipt-view.component.html',
  styleUrls: ['./item-receipt-view.component.scss']
})
export class ItemReceiptViewComponent implements OnInit {
  displayedColumns: string[] = [ID, COMPANY, ARTICLE, AMOUNT];
  itemReceiptList: ItemReceipt[] = [];
  // itemReceiptsList$!: Observable<ItemReceipt[]>;
  // constructor(private service: ServiceItemReceiptService) { }
  //
  // ngOnInit(): void {
  //   this.itemReceiptsList$ = this.service.getAllItemReceipts();
  // }


  constructor(private service: ServiceItemReceiptService) {
  }

  ngOnInit(): void {
    this.service.getAllItemReceipts().subscribe(value => {
      this.itemReceiptList = value.filter(isStorno => isStorno.storno)
    });
  }

}
