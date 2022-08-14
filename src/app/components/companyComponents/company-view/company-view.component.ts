import {Component, OnInit, ViewChild} from '@angular/core';
import {ServiceCompanyService} from "../../../services/service-company.service";
import {Company} from "../../../models/company";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

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

  constructor(private service: ServiceCompanyService) {
    this.dataSource = new MatTableDataSource<Company>(this.companiesList);
  }

  ngOnInit(): void {
    this.service.getAllCompanies().subscribe(company =>{
      this.companiesList = company;
      this.dataSource = new MatTableDataSource<Company>(this.companiesList);
      this.dataSource.paginator = this.paginator;
    });
  }
}
