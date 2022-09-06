import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServiceCompany} from "../../../services/service-company.service";

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.scss']
})
export class CompanyDeleteComponent implements OnInit {

  companyForm!: FormGroup;
  buttonConfirm: string = "YES";
  buttonClose: string = "NO";

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<CompanyDeleteComponent>, private service: ServiceCompany) {
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

  ngDeleteCompanyDTO() {
    this.service.deleteCompany(this.editData.id).subscribe({
      next: () => {
        alert("Company deleted successfully");
        this.companyForm.reset();
        this.dialogRef.close('delete');
      },
      error: () => {
        alert("Error while deleting the record!");
      }
    });
  }
}
