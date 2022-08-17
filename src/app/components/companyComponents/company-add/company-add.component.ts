import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceCompany} from "../../../services/service-company.service";
import {CompanyDTO} from "../../../models/company";

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  companyForm!: FormGroup;
  firmaDto!: CompanyDTO

  constructor(private formBuilder: FormBuilder, private service: ServiceCompany) {
  }

  ngOnInit(): void {
    this.ngGenerateCompanyForm();
  }

  ngGenerateCompanyForm() {
    this.companyForm = this.formBuilder.group({
      companyIdentityNumber: ['', Validators.required],
      companyName: ['', Validators.required]
    })
  }

  ngCreateCompany() {
    this.firmaDto = {
      id: null,
      oibFirme: this.companyForm.get("companyIdentityNumber")?.value,
      nazivFirme: this.companyForm.get("companyName")?.value
    }
    this.service.saveCompany(this.firmaDto).subscribe(company => {
      this.firmaDto = company
      console.log("Save success ", this.firmaDto);
    });
  }
}
