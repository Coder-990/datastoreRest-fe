import {Component, OnInit} from '@angular/core';
import {CompanyDTO} from "../../../models/company";
import {ServiceCompany} from "../../../services/service-company.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {ShipmentDTO} from "../../../models/shipment";
import {ServiceShipment} from "../../../services/service-shipment.service";

@Component({
  selector: 'app-shipment-add',
  templateUrl: './shipment-add.component.html',
  styleUrls: ['./shipment-add.component.scss']
})
export class ShipmentAddComponent implements OnInit {

  companiesList: CompanyDTO[] = [];
  shipmentForm!: FormGroup
  shipmentDTO!: ShipmentDTO

  constructor(private formBuilder: FormBuilder, private companyService: ServiceCompany,
              private shipmentService: ServiceShipment, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.ngGetAllCompanies();
    this.ngGenerateShipmentForm();
  }

  ngGetAllCompanies() {
    return this.companyService.getAllCompanies().subscribe(company => {
      this.companiesList = company;
    });
  }

  ngGenerateShipmentForm() {
    this.shipmentForm = this.formBuilder.group({
      date: ['', Validators.required],
      company: ['', Validators.required]
    })
  }

  ngTransformDateToString() {
    return this.datePipe.transform(new Date(this.shipmentForm.get("date")?.value), 'yyyy-MM-dd')
  }

  ngGetCompanyDTO() {
    return {
      id: this.shipmentForm.get("company")?.value.id,
      oibFirme: this.shipmentForm.get("company")?.value.oibFirme,
      nazivFirme: this.shipmentForm.get("company")?.value.nazivFirme
    }
  }

  ngBuildShipmentDTO() {
    return {
      id: null,
      datum: this.ngTransformDateToString(),
      izdatnicaFirme: this.ngGetCompanyDTO()
    }
  }

  ngSaveShipment() {
    this.shipmentDTO = this.ngBuildShipmentDTO()
    this.shipmentService.saveShipment(this.shipmentDTO).subscribe(receipt => {
      if (receipt instanceof ShipmentDTO) this.shipmentDTO = receipt
      console.log("Save success ", this.shipmentDTO);
    });
  }

}
