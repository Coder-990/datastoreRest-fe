import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ItemReceipt} from "../../../models/item-receipt";
import {ServiceItemReceiptService} from "../../../services/service-item-receipt.service";

@Component({
  selector: 'app-item-receipt-view',
  templateUrl: './item-receipt-view.component.html',
  styleUrls: ['./item-receipt-view.component.scss']
})
export class ItemReceiptViewComponent implements OnInit {

  itemReceiptsList$!: Observable<ItemReceipt[]>;
  constructor(private service: ServiceItemReceiptService) { }

  ngOnInit(): void {
    this.itemReceiptsList$ = this.service.getAllItemReceipts();
  }

}
