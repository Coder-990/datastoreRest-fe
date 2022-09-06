import {Component, OnInit, ViewChild} from '@angular/core';
import {ShipmentDTO} from "../../../../models/shipment";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ServiceShipment} from "../../../../services/service-shipment.service";
import {MatDialog} from "@angular/material/dialog";
import {ShipmentAddComponent} from "../shipment-add/shipment-add.component";
import {ShipmentDeleteComponent} from "../shipment-delete/shipment-delete.component";
import {MatSort} from "@angular/material/sort";

const ID = 'ID';
const DATE = 'Date';
const COMPANY = 'Company';
const ACTION = 'Action';

@Component({
  selector: 'app-shipment-view',
  templateUrl: './shipment-view.component.html',
  styleUrls: ['./shipment-view.component.scss']
})
export class ShipmentViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  displayedColumns: string[] = [ID, DATE, COMPANY, ACTION];
  shipmentsList: ShipmentDTO[] = [];
  dataSource: MatTableDataSource<ShipmentDTO>;
  buttonDelete: string = "Delete";
  resultSave: string = 'save';
  resultDelete: string = 'delete';
  private dialogRef: any;
  noMatch: string = "No data matching the filter";

  constructor(private service: ServiceShipment, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<ShipmentDTO>(this.shipmentsList);
  }

  ngOnInit(): void {
    this.ngGetAll();
  }

  private ngGetAll() {
    this.service.getAllShipments().subscribe(shipments => {
      this.shipmentsList = shipments;
      this.dataSource = new MatTableDataSource<ShipmentDTO>(this.shipmentsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngAddShipment() {
    this.dialogRef = this.dialog
      .open(ShipmentAddComponent, {width: '20%'});
    this.ngDialogResultAfterClose(this.resultSave);
  }

  ngDeleteShipment(id: number) {
    this.dialogRef = this.dialog
      .open(ShipmentDeleteComponent, {width: '20%', data: id});
    this.ngDialogResultAfterClose(this.resultDelete);
  }

  ngDialogResultAfterClose(action: string) {
    this.dialogRef.afterClosed().subscribe((result: string) => {
      if (result === action) this.ngGetAll()
      console.log(`Dialog result: ${result}`);
    });
  }

  ngApplyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    let paginator = this.dataSource.paginator;
    if (paginator) paginator.firstPage();
  }
}
