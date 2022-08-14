import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemShipment} from "../../../models/item-shipment";
import {ServiceItemShipment} from "../../../services/service-item-shipment.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {ItemShipmentAddComponent} from "../item-shipment-add/item-shipment-add.component";
import {CancelItemShipmentViewComponent} from
    "../../cancelItemShipmentComponents/cancel-item-shipment-view/cancel-item-shipment-view.component";
import {
  CancelItemShipmentCancelComponent
} from "../../cancelItemShipmentComponents/cancel-item-shipment-cancel/cancel-item-shipment-cancel.component";

const ID = 'ID';
const COMPANY = 'Company';
const ARTICLE = 'Article';
const AMOUNT = 'Amount';
const CANCELLATION = 'Cancellation';

@Component({
  selector: 'app-item-shipment-view',
  templateUrl: './item-shipment-view.component.html',
  styleUrls: ['./item-shipment-view.component.scss']
})
export class ItemShipmentViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  displayedColumns: string[] = [ID, COMPANY, ARTICLE, AMOUNT, CANCELLATION];
  itemShipmentsList: ItemShipment[] = [];
  dataSource: MatTableDataSource<ItemShipment>;

  constructor(private service: ServiceItemShipment, private dialog:MatDialog) {
    this.dataSource = new MatTableDataSource<ItemShipment>(this.itemShipmentsList);
  }

  ngOnInit(): void {
   this.ngGetAll();
  }

  private ngGetAll() {
    this.service.getAllItemShipments().subscribe(itemCancellation => {
      this.itemShipmentsList = itemCancellation.filter(isNotCancelled => !isNotCancelled.storno);
      this.dataSource = new MatTableDataSource<ItemShipment>(this.itemShipmentsList);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAddNewItemShipment() {
    const dialogRef = this.dialog.open(ItemShipmentAddComponent, {
      width: '20%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngCancelItemShipment() {
    const dialogRef = this.dialog.open(CancelItemShipmentCancelComponent, {
      width: '20%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
