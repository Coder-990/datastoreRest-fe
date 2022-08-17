import {Component, OnInit} from '@angular/core';
import {ServiceCompany} from "../../../services/service-company.service";
import {CompanyDTO} from "../../../models/company";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReceiptDTO} from "../../../models/receipt";
import {ServiceReceipt} from "../../../services/service-receipt.service";

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
              private receiptService: ServiceReceipt) {
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
      datum: this.receiptForm.get("date")?.value,
      primkaFirme: this.receiptForm.get("company")?.value
    }
    this.receiptService.saveReceipt(this.receiptDTO).subscribe(receipt => {
      if (receipt instanceof ReceiptDTO) {
        this.receiptDTO = receipt
      }
      console.log("Save success ", this.receiptDTO);
    });
  }
}
