import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ServiceCompanyService} from "../../../services/service-company.service";
import {Company} from "../../../models/company";

const NAME = 'Name';

const IDENTITY_NUMBER = 'Identity number';

const ID = 'ID';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.scss']
})
export class CompanyViewComponent implements OnInit {
  displayedColumns: string[] = [ID, IDENTITY_NUMBER, NAME];
  companiesList$!: Observable<Company[]>;

  constructor(private service: ServiceCompanyService) {}


  ngOnInit(): void {
    this.companiesList$ = this.service.getAllCompanies();
  }

}
