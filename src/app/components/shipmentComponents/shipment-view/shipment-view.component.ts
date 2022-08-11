import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Shipment} from "../../../models/shipment";
import {ServiceShipmentService} from "../../../services/service-shipment.service";
const ID = 'ID';
const DATE = 'Date';
const COMPANY = 'Company';
@Component({
  selector: 'app-shipment-view',
  templateUrl: './shipment-view.component.html',
  styleUrls: ['./shipment-view.component.scss']
})
export class ShipmentViewComponent implements OnInit {
  displayedColumns: string[] = [ID, DATE, COMPANY];
  shipmentsList$!: Observable<Shipment[]>;

  constructor(private service: ServiceShipmentService) {
  }

  ngOnInit(): void {
    this.shipmentsList$ = this.service.getAllShipments();
  }

}
