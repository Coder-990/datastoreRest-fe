import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemShipment} from "../../../models/item-shipment";
import {ServiceItemShipmentService} from "../../../services/service-item-shipment.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

const ID = 'ID';
const COMPANY = 'Company';
const ARTICLE = 'Article';
const AMOUNT = 'Amount';
const EDIT_DELETE = 'Edit/Delete';

@Component({
  selector: 'app-item-shipment-view',
  templateUrl: './item-shipment-view.component.html',
  styleUrls: ['./item-shipment-view.component.scss']
})
export class ItemShipmentViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  displayedColumns: string[] = [ID, COMPANY, ARTICLE, AMOUNT, EDIT_DELETE];
  itemShipmentsList: ItemShipment[] = [];
  dataSource: MatTableDataSource<ItemShipment>;

  constructor(private service: ServiceItemShipmentService) {
    this.dataSource = new MatTableDataSource<ItemShipment>(this.itemShipmentsList);
  }

  ngOnInit(): void {
    this.service.getAllItemShipments().subscribe(itemCancellation => {
      this.itemShipmentsList = itemCancellation.filter(isNotCancelled => !isNotCancelled.storno)
      this.dataSource = new MatTableDataSource<ItemShipment>(this.itemShipmentsList);
      this.dataSource.paginator = this.paginator;
    });
  }

}
// ngOnChanges() {
//   if (this.itemShipmentsList) {
//     this.dataSource = new MatTableDataSource<ItemShipment>(this.itemShipmentsList);
//     this.dataSource.paginator = this.paginator;
//   }
// }
