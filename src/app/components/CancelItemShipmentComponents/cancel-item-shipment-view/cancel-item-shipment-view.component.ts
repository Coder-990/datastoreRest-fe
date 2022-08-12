import {Component, OnInit} from '@angular/core';
import {ItemShipment} from "../../../models/item-shipment";
import {ServiceItemShipmentService} from "../../../services/service-item-shipment.service";

@Component({
  selector: 'app-cancel-item-shipment-view',
  templateUrl: './cancel-item-shipment-view.component.html',
  styleUrls: ['./cancel-item-shipment-view.component.scss']
})
export class CancelItemShipmentViewComponent implements OnInit {
  cancelItemShipmentsList: ItemShipment[] = [];

  constructor(private service: ServiceItemShipmentService) {
  }

  ngOnInit(): void {
    this.service.getAllItemShipments().subscribe(value => {
      this.cancelItemShipmentsList = value.filter(isStorno => isStorno.storno)
    });

  }
}
