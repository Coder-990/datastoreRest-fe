import {Component, OnInit} from '@angular/core';
import {ServiceCompany} from "../../../services/service-company.service";
import {CompanyDTO} from "../../../models/company";

@Component({
  selector: 'app-receipt-add',
  templateUrl: './receipt-add.component.html',
  styleUrls: ['./receipt-add.component.scss']
})
export class ReceiptAddComponent implements OnInit {

  companiesList: CompanyDTO[] = [];

  constructor(private service: ServiceCompany) {
  }

  ngOnInit(): void {
    this.ngGetAll();
  }

  ngGetAll() {
    return this.service.getAllCompanies().subscribe(company => {
      this.companiesList = company;
    });
  }
}
