import {Component, OnInit, ViewChild} from '@angular/core';
import {Shipment} from "../../../models/shipment";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ServiceShipment} from "../../../services/service-shipment.service";
import {MatDialog} from "@angular/material/dialog";
import {ShipmentAddComponent} from "../shipment-add/shipment-add.component";

const ID = 'ID';
const DATE = 'Date';
const COMPANY = 'Company';
const EDIT_DELETE = 'Edit/Delete';

@Component({
  selector: 'app-shipment-view',
  templateUrl: './shipment-view.component.html',
  styleUrls: ['./shipment-view.component.scss']
})
export class ShipmentViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  displayedColumns: string[] = [ID, DATE, COMPANY, EDIT_DELETE];
  shipmentsList: Shipment[] = [];
  dataSource: MatTableDataSource<Shipment>;

  constructor(private service: ServiceShipment, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Shipment>(this.shipmentsList);
  }

  ngOnInit(): void {
    this.ngGetAll();
  }

  private ngGetAll() {
    this.service.getAllShipments().subscribe(receipt => {
      this.shipmentsList = receipt;
      this.dataSource = new MatTableDataSource<Shipment>(this.shipmentsList);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAddNewShipment() {
    const dialogRef = this.dialog.open(ShipmentAddComponent, {
      width: '20%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
