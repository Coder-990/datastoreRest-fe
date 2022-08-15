import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceCompany} from "../../../services/service-company.service";

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  companyForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ServiceCompany) {
  }

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      companyIdentityNumber: ['', Validators.required],
      companyName: ['', Validators.required]
    })
  }

  ngCreateCompany() {
    this.companyForm = this.formBuilder.group({
      companyIdentityNumber: ['', Validators.required],
      companyName: ['', Validators.required]
    })
    console.log(this.companyForm.value);
    return this.service.saveCompany(this.companyForm);
  }
}
