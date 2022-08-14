import {Component, OnInit, ViewChild} from '@angular/core';
import {Receipt} from "../../../models/receipt";
import {ServiceReceiptService} from "../../../services/service-receipt.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

const ID = 'ID';
const DATE = 'Date';
const COMPANY = 'Company';
const EDIT_DELETE = 'Edit/Delete';

@Component({
  selector: 'app-receipt-view',
  templateUrl: './receipt-view.component.html',
  styleUrls: ['./receipt-view.component.scss']
})
export class ReceiptViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  displayedColumns: string[] = [ID, DATE, COMPANY, EDIT_DELETE];
  receiptsList: Receipt[] = [];
  dataSource: MatTableDataSource<Receipt>;

  constructor(private service: ServiceReceiptService) {
    this.dataSource = new MatTableDataSource<Receipt>(this.receiptsList);
  }

  ngOnInit(): void {
    this.service.getAllReceipts().subscribe(receipt => {
      this.receiptsList = receipt;
      this.dataSource = new MatTableDataSource<Receipt>(this.receiptsList);
      this.dataSource.paginator = this.paginator;
    })
  }

}
