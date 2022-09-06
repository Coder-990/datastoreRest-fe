import {Component, OnInit} from '@angular/core';
import {CompanyDTO} from "../../../../models/company";
import {ServiceCompany} from "../../../../services/service-company.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {ShipmentDTO} from "../../../../models/shipment";
import {ServiceShipment} from "../../../../services/service-shipment.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-shipment-add',
  templateUrl: './shipment-add.component.html',
  styleUrls: ['./shipment-add.component.scss']
})
export class ShipmentAddComponent implements OnInit {

  companiesList: CompanyDTO[] = [];
  shipmentForm!: FormGroup
  shipmentDTO!: ShipmentDTO
  buttonClose: string = "Close";
  buttonSave: string = "Save";

  constructor(private formBuilder: FormBuilder, private companyService: ServiceCompany,
              private shipmentService: ServiceShipment, private dialogRef: MatDialogRef<ShipmentAddComponent>,
              private datePipe: DatePipe) {
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

  ngSaveShipmentDTO() {
    this.shipmentDTO = this.ngBuildShipmentDTO()
    this.shipmentService.saveShipment(this.shipmentDTO).subscribe({
      next: () => {
        alert("Shipment saved successfully");
        this.shipmentForm.reset();
        this.dialogRef.close('save');
      },
      error: () => {
        alert("Error while saving the record!");
      }
    });
  }
}
