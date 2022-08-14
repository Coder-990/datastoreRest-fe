import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class ServiceCompanyService {

  readonly companiesUrl = "http://localhost:8080/companies";

  constructor(private http: HttpClient) {
  }

  getAllCompanies(): Observable<any[]> {
    return this.http.get<any[]>(this.companiesUrl);
  }

  getCompanyById(id: string): Observable<any> {
    return this.http.get<any>(this.companiesUrl + `/${id}`);
  }

  saveCompany(company: Company) {
    return this.http.post(this.companiesUrl, company);
  }

  updateCompany(id: number | string, company: Company) {
    return this.http.put(this.companiesUrl + `/${id}`, company);
  }

  deleteCompany(id: number | string) {
    return this.http.delete(this.companiesUrl + `/${id}`);
  }
}
