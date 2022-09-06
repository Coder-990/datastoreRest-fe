import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemShipmentDTO} from "../../../../models/item-shipment";
import {ServiceItemShipment} from "../../../../services/service-item-shipment.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {ItemShipmentAddComponent} from "../item-shipment-add/item-shipment-add.component";
import {ItemShipmentCancelComponent} from "../item-shipment-cancel/item-shipment-cancel.component";
import {MatSort} from "@angular/material/sort";

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
  @ViewChild(MatSort) sort: MatSort | null = null;

  displayedColumns: string[] = [ID, COMPANY, ARTICLE, AMOUNT, CANCELLATION];
  itemShipmentsList: ItemShipmentDTO[] = [];
  dataSource: MatTableDataSource<ItemShipmentDTO>;
  buttonCancel: string = "Cancel";
  resultSave: string = 'save';
  resultCancel: string = 'update';
  noMatch: string = "No data matching the filter";
  private dialogRef: any;

  constructor(private service: ServiceItemShipment, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<ItemShipmentDTO>(this.itemShipmentsList);
  }

  ngOnInit(): void {
    this.ngGetAll();
  }

  private ngGetAll() {
    this.service.getAllItemShipments().subscribe(itemCancellation => {
      this.itemShipmentsList = itemCancellation.filter(isNotCancelled => !isNotCancelled.storno);
      this.dataSource = new MatTableDataSource<ItemShipmentDTO>(this.itemShipmentsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAddItemShipment() {
    this.dialogRef = this.dialog.open(ItemShipmentAddComponent, {width: '20%'});
    this.ngDialogResultAfterClose(this.resultSave);
  }

  ngCancelItemShipment(id: number) {
    this.dialogRef = this.dialog.open(ItemShipmentCancelComponent, {width: '20%', data: id});
    this.ngDialogResultAfterClose(this.resultCancel);
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
