import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompanyDTO} from "../../../models/company";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ServiceCompany} from "../../../services/service-company.service";

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  companyForm!: FormGroup;
  firmaDto!: CompanyDTO
  actionButton: string = "Update";

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
              private service: ServiceCompany) {
  }

  ngOnInit(): void {
    this.ngGenerateCompanyForm();
  }

  ngGenerateCompanyForm() {
    this.companyForm = this.formBuilder.group({
      companyIdentityNumber: ['', Validators.required],
      companyName: ['', Validators.required]
    })
    this.ngUpdateCompanyDTO()
  }

  ngBuildCompanyDTO() {
    return {
      id: null,
      oibFirme: this.companyForm.get("companyIdentityNumber")?.value,
      nazivFirme: this.companyForm.get("companyName")?.value
    }
  }

  ngUpdateCompanyDTO() {
    if (this.editData) {
      console.log(this.editData)
      this.companyForm.controls['companyIdentityNumber'].setValue(this.editData.oibFirme)
      this.companyForm.controls['companyName'].setValue(this.editData.nazivFirme)
    }
  }

  ngEditCompany() {
    this.ngUpdateCompanyDTO()
    this.service.updateCompany(this.firmaDto.id, this.firmaDto).subscribe(company => {
      this.firmaDto = <CompanyDTO>company
      console.log("Update success ", this.firmaDto);
    });
  }

}
