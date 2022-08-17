import {Component, OnInit} from '@angular/core';
import {CompanyDTO} from "../../../models/company";
import {ServiceCompany} from "../../../services/service-company.service";

@Component({
  selector: 'app-shipment-add',
  templateUrl: './shipment-add.component.html',
  styleUrls: ['./shipment-add.component.scss']
})
export class ShipmentAddComponent implements OnInit {

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
