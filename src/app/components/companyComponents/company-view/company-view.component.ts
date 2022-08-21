import {Component, OnInit, ViewChild} from '@angular/core';
import {ServiceCompany} from "../../../services/service-company.service";
import {CompanyDTO} from "../../../models/company";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {CompanyAddComponent} from "../company-add/company-add.component";
import {MatSort} from '@angular/material/sort';
import {CompanyEditComponent} from "../company-edit/company-edit.component";

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
  @ViewChild(MatSort) sort: MatSort | null = null;

  displayedColumns: string[] = [ID, IDENTITY_NUMBER, NAME, EDIT_DELETE];
  companiesList: CompanyDTO[] = [];
  dataSource: MatTableDataSource<CompanyDTO>;
  buttonEdit: string = "Edit";
  buttonDelete: string = "Delete";

  constructor(private service: ServiceCompany, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<CompanyDTO>(this.companiesList);
  }

  ngOnInit(): void {
    this.ngGetAll()
  }

  ngGetAll() {
    this.service.getAllCompanies().subscribe(company => {
      this.companiesList = company;
      this.dataSource = new MatTableDataSource<CompanyDTO>(this.companiesList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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

  ngApplyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    let paginator = this.dataSource.paginator;
    if (paginator) paginator.firstPage();
  }

  ngEditCompany(row:any) {
    const dialogRef = this.dialog.open(CompanyEditComponent, {
      width: '20%',
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
