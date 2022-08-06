import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
//get by company identity number
  getCompanyById(id: string): Observable<any> {
    return this.http.get<any>(this.companiesUrl + `/${id}`);
  }

  saveCompany(data: any) {
    return this.http.post(this.companiesUrl, data);
  }

  updateCompany(id: number | string, data: any) {
    return this.http.put(this.companiesUrl + `/${id}`, data);
  }

  deleteCompany(id: number | string) {
    return this.http.delete(this.companiesUrl + `/${id}`);
  }
}
