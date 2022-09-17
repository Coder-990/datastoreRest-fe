import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemShipmentDTO} from "../../../../models/item-shipment";
import {ServiceItemShipment} from "../../../../services/service-item-shipment.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

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
  @ViewChild(MatSort) sort: MatSort | null = null;

  displayedColumns: string[] = [ID, COMPANY, ARTICLE, AMOUNT, CANCELLATION_DATE];
  cancelItemShipmentList: ItemShipmentDTO[] = [];
  dataSource: MatTableDataSource<ItemShipmentDTO>;
  noMatch: string = "No data matching the filter";

  constructor(private service: ServiceItemShipment) {
    this.dataSource = new MatTableDataSource<ItemShipmentDTO>(this.cancelItemShipmentList);
  }

  ngOnInit(): void {
    this.ngGetAll();
  }

  private ngGetAll() {
    this.service.getAllItemShipments().subscribe(itemCancellation => {
      this.cancelItemShipmentList = itemCancellation.filter(isCancelled => isCancelled.storno)
      this.dataSource = new MatTableDataSource<ItemShipmentDTO>(this.cancelItemShipmentList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngApplyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    let paginator = this.dataSource.paginator;
    if (paginator) paginator.firstPage();
  }
}
