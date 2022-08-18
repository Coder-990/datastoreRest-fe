import {Component, OnInit} from '@angular/core';
import {ServiceCompany} from "../../../services/service-company.service";
import {CompanyDTO} from "../../../models/company";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReceiptDTO} from "../../../models/receipt";
import {ServiceReceipt} from "../../../services/service-receipt.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-receipt-add',
  templateUrl: './receipt-add.component.html',
  styleUrls: ['./receipt-add.component.scss']
})
export class ReceiptAddComponent implements OnInit {

  companiesList: CompanyDTO[] = [];
  receiptForm!: FormGroup
  receiptDTO!: ReceiptDTO


  constructor(private formBuilder: FormBuilder,
              private companyService: ServiceCompany,
              private receiptService: ServiceReceipt,
              public datepipe: DatePipe) {
  }

  ngOnInit(): void {
    this.ngGetAll();
    this.ngGenerateReceiptForm();
  }

  ngGetAll() {
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

  ngCreateReceipt() {
    this.receiptDTO = {
      id: null,
      datum: this.datepipe.transform(new Date(this.receiptForm.get("date")?.value), 'yyyy-MM-dd'),
      primkaFirme: {
        id: this.receiptForm.get("company")?.value.id,
        oibFirme: this.receiptForm.get("company")?.value.oibFirme,
        nazivFirme: this.receiptForm.get("company")?.value.nazivFirme
      }
    }
    this.receiptService.saveReceipt(this.receiptDTO).subscribe(receipt => {
      if (receipt instanceof ReceiptDTO) {
        this.receiptDTO = receipt
      }
      console.log("Save success ", this.receiptDTO);
    });
  }
}
