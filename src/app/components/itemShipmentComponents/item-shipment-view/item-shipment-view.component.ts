import {Component, OnInit} from '@angular/core';
import {ItemShipment} from "../../../models/item-shipment";
import {ServiceItemShipmentService} from "../../../services/service-item-shipment.service";
import {Observable} from "rxjs";

const ID = 'ID';
const COMPANY = 'Company';
const ARTICLE = 'Article';
const AMOUNT = 'Amount';

@Component({
  selector: 'app-item-shipment-view',
  templateUrl: './item-shipment-view.component.html',
  styleUrls: ['./item-shipment-view.component.scss']
})
export class ItemShipmentViewComponent implements OnInit {
  displayedColumns: string[] = [ID, COMPANY, ARTICLE, AMOUNT];
  itemShipmentsList$!: ItemShipment[];

  constructor(private service: ServiceItemShipmentService) {
  }

  ngOnInit(): void {
     this.service.getAllItemShipments().subscribe(value => {
      this.itemShipmentsList$ = value.filter(isStrnoNot => isStrnoNot.storno)
       console.log(value)
    });


  }

}
