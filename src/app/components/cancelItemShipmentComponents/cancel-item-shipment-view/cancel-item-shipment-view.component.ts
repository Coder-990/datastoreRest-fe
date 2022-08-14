import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemShipment} from "../../../models/item-shipment";
import {ServiceItemShipment} from "../../../services/service-item-shipment.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

const ID = 'ID';
const COMPANY = 'Company';
const ARTICLE = 'Article';
const AMOUNT = 'Amount';
const CANCELLATION_DATE = 'Cancellation_date';

@Component({
  selector: 'app-cancel-item-shipment-view',
  templateUrl: './cancel-item-shipment-view.component.html',
  styleUrls: ['./cancel-item-shipment-view.component.scss']
})
export class CancelItemShipmentViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  displayedColumns: string[] = [ID, COMPANY, ARTICLE, AMOUNT, CANCELLATION_DATE];
  cancelItemShipmentList: ItemShipment[] = [];
  dataSource: MatTableDataSource<ItemShipment>;

  constructor(private service: ServiceItemShipment) {
    this.dataSource = new MatTableDataSource<ItemShipment>(this.cancelItemShipmentList);
  }

  ngOnInit(): void {
   this.ngGetAll();
  }

  private ngGetAll() {
    this.service.getAllItemShipments().subscribe(itemCancellation => {
      this.cancelItemShipmentList = itemCancellation.filter(isCancelled => isCancelled.storno)
      this.dataSource = new MatTableDataSource<ItemShipment>(this.cancelItemShipmentList);
      this.dataSource.paginator = this.paginator;
    });
  }
}
