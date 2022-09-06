import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceCompany} from "../../../services/service-company.service";
import {CompanyDTO} from "../../../models/company";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  companyForm!: FormGroup;
  companyDTO!: CompanyDTO
  buttonAdd: string = "Save";
  buttonClose: string = "Close";

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<CompanyAddComponent>,
              private companyService: ServiceCompany) {
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

  ngBuildCompanyDTO() {
    return {
      id: null,
      oibFirme: this.companyForm.get("companyIdentityNumber")?.value,
      nazivFirme: this.companyForm.get("companyName")?.value
    }
  }

  ngSaveCompany() {
    this.companyDTO = this.ngBuildCompanyDTO()
    this.companyService.saveCompany(this.companyDTO).subscribe({
      next: () => {
        alert("Company saved successfully");
        this.companyForm.reset();
        this.dialogRef.close('save');
      },
      error: () => {
        alert("Error while saving the record!");
      }
    });
  }

}
