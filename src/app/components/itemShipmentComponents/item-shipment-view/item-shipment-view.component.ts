import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ItemShipment} from "../../../models/item-shipment";
import {ServiceItemShipmentService} from "../../../services/service-item-shipment.service";

@Component({
  selector: 'app-item-shipment-view',
  templateUrl: './item-shipment-view.component.html',
  styleUrls: ['./item-shipment-view.component.scss']
})
export class ItemShipmentViewComponent implements OnInit {

  itemShipmentsList$!: Observable<ItemShipment[]>;
  constructor(private service: ServiceItemShipmentService) { }

  ngOnInit(): void {
    this.itemShipmentsList$ = this.service.getAllItemShipments();
  }

}
