import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompanyDTO} from "../../../models/company";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServiceCompany} from "../../../services/service-company.service";

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  companyForm!: FormGroup;
  companyDTO!: CompanyDTO;
  actionButton: string = "Update";

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<CompanyEditComponent>, private service: ServiceCompany) {
  }

  ngOnInit(): void {
    this.ngGenerateCompanyForm();
    this.ngGetEditData()
  }

  ngGenerateCompanyForm() {
    this.companyForm = this.formBuilder.group({
      companyIdentityNumber: ['', Validators.required],
      companyName: ['', Validators.required]
    })
  }

  ngGetEditData() {
    this.companyForm.controls['companyIdentityNumber'].setValue(this.editData.oibFirme)
    this.companyForm.controls['companyName'].setValue(this.editData.nazivFirme)
  }

  ngBuildCompanyDTO() {
    return {
      id: null,
      oibFirme: this.companyForm.get("companyIdentityNumber")?.value,
      nazivFirme: this.companyForm.get("companyName")?.value
    }
  }

  ngUpdateCompany() {
    this.companyDTO = this.ngBuildCompanyDTO();
    this.service.updateCompany(this.editData.id, this.companyDTO).subscribe({
      next: () => {
        alert("Product updated successfully");
        this.companyForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert("Error while updating the record!");
      }
    });
  }
}

