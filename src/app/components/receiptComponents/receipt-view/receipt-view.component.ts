import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Receipt} from "../../../models/receipt";
import {ServiceReceiptService} from "../../../services/service-receipt.service";

@Component({
  selector: 'app-receipt-view',
  templateUrl: './receipt-view.component.html',
  styleUrls: ['./receipt-view.component.scss']
})
export class ReceiptViewComponent implements OnInit {

  receiptsList$!: Observable<Receipt[]>;

  constructor(private service: ServiceReceiptService) {
  }

  ngOnInit(): void {
    this.receiptsList$ = this.service.getAllReceipts();
  }

}
