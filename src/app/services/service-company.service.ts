import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CompanyDTO} from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class ServiceCompany {

  readonly companiesUrl = "http://localhost:8080/companies";

  constructor(private http: HttpClient) {
  }

  getAllCompanies(): Observable<CompanyDTO[]> {
    return this.http.get<CompanyDTO[]>(this.companiesUrl);
  }

  getCompanyById(id: number | null): Observable<any> {
    return this.http.get<any>(this.companiesUrl + `/${id}`);
  }

  saveCompany(company: CompanyDTO) {
    return this.http.post<any>(this.companiesUrl, company);
  }

  updateCompany(id: number | null, company: CompanyDTO) {
    return this.http.put(this.companiesUrl + `/${id}`, company);
  }

  deleteCompany(id: number | null) {
    return this.http.delete(this.companiesUrl +  `/${id}`);
  }
}
