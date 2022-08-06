import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Shipment} from "../../../models/shipment";
import {ServiceShipmentService} from "../../../services/service-shipment.service";

@Component({
  selector: 'app-shipment-view',
  templateUrl: './shipment-view.component.html',
  styleUrls: ['./shipment-view.component.scss']
})
export class ShipmentViewComponent implements OnInit {

  shipmentsList$!: Observable<Shipment[]>;
  constructor(private service: ServiceShipmentService ) { }

  ngOnInit(): void {
    this.shipmentsList$ = this.service.getAllShipments();
  }

}
