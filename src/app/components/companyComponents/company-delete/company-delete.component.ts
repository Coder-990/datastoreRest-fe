import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompanyDTO} from "../../../models/company";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServiceCompany} from "../../../services/service-company.service";

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.scss']
})
export class CompanyDeleteComponent implements OnInit {

  companyForm!: FormGroup;
  companyDTO!: CompanyDTO;
  actionButton: string = "YES";

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<CompanyDeleteComponent>, private service: ServiceCompany) {
  }

  ngOnInit(): void {
    this.ngGenerateCompanyForm();
    // this.ngGetCompanyDTO()
  }

  ngGenerateCompanyForm() {
    this.companyForm = this.formBuilder.group({
      companyIdentityNumber: ['', Validators.required],
      companyName: ['', Validators.required]
    })
  }

  //
  // ngGetCompanyDTO() {
  //   this.companyForm.controls['companyIdentityNumber'].setValue(this.editData.oibFirme)
  //   this.companyForm.controls['companyName'].setValue(this.editData.nazivFirme)
  // }
  //
  // ngBuildCompanyDTO() {
  //   return {
  //     id: null,
  //     oibFirme: this.companyForm.get("companyIdentityNumber")?.value,
  //     nazivFirme: this.companyForm.get("companyName")?.value
  //   }
  // }


  ngDeleteCompanyDTO(id: number | null) {
    this.service.deleteCompany(id).subscribe({
      next: (_res) => {
        alert("Company deleted successfully");
        this.companyForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert("Error while deleting the record!");
      }
    });
  }
}
