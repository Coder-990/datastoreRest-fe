import {Component, OnInit} from '@angular/core';
import {ServiceCompany} from "../../../../services/service-company.service";
import {CompanyDTO} from "../../../../models/company";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReceiptDTO} from "../../../../models/receipt";
import {ServiceReceipt} from "../../../../services/service-receipt.service";
import {DatePipe} from "@angular/common";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-receipt-add',
  templateUrl: './receipt-add.component.html',
  styleUrls: ['./receipt-add.component.scss']
})
export class ReceiptAddComponent implements OnInit {

  companiesList: CompanyDTO[] = [];
  receiptForm!: FormGroup
  receiptDTO!: ReceiptDTO
  buttonClose: string = "Close";
  buttonSave: string = "Save";

  constructor(private formBuilder: FormBuilder, private companyService: ServiceCompany,
              private receiptService: ServiceReceipt, private dialogRef: MatDialogRef<ReceiptAddComponent>,
              public datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.ngGetAllCompanies();
    this.ngGenerateReceiptForm();
  }

  ngGetAllCompanies() {
    return this.companyService.getAllCompanies().subscribe(company => {
      this.companiesList = company;
    });
  }

  ngGenerateReceiptForm() {
    this.receiptForm = this.formBuilder.group({
      date: ['', Validators.required],
      company: ['', Validators.required]
    })
  }

  ngTransformDateToString() {
    return this.datePipe.transform(new Date(this.receiptForm.get("date")?.value), 'yyyy-MM-dd')
  }

  ngGetCompanyDTO() {
    return {
      id: this.receiptForm.get("company")?.value.id,
      oibFirme: this.receiptForm.get("company")?.value.oibFirme,
      nazivFirme: this.receiptForm.get("company")?.value.nazivFirme
    }
  }

  ngBuildReceiptDTO() {
    return {
      id: null,
      datum: this.ngTransformDateToString(),
      primkaFirme: this.ngGetCompanyDTO()
    }
  }

  ngSaveReceiptDTO() {
    this.receiptDTO = this.ngBuildReceiptDTO()
    this.receiptService.saveReceipt(this.receiptDTO).subscribe({
      next: () => {
        alert("Receipt saved successfully");
        this.receiptForm.reset();
        this.dialogRef.close('save');
      },
      error: () => {
        alert("Error while saving the record!");
      }
    });
  }
}
