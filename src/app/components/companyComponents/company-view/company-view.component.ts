import {Component, OnInit, ViewChild} from '@angular/core';
import {ServiceCompany} from "../../../services/service-company.service";
import {Company} from "../../../models/company";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ReceiptAddComponent} from "../../receiptComponents/receipt-add/receipt-add.component";
import {MatDialog} from "@angular/material/dialog";
import {CompanyAddComponent} from "../company-add/company-add.component";

const ID = 'ID';
const IDENTITY_NUMBER = 'Identity number';
const NAME = 'Name';
const EDIT_DELETE = 'Edit/Delete';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.scss']
})
export class CompanyViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  displayedColumns: string[] = [ID, IDENTITY_NUMBER, NAME, EDIT_DELETE];
  companiesList: Company[] = [];
  dataSource: MatTableDataSource<Company>;

  constructor(private service: ServiceCompany, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Company>(this.companiesList);
  }

  ngOnInit(): void {
    this.ngGetAll()
  }

  ngGetAll() {
    this.service.getAllCompanies().subscribe(company => {
      this.companiesList = company;
      this.dataSource = new MatTableDataSource<Company>(this.companiesList);
      this.dataSource.paginator = this.paginator;
    });
  }

  addNewCompany() {
    const dialogRef = this.dialog.open(CompanyAddComponent, {
      width: '20%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
