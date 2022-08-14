import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceReceipt {

  readonly receiptsUrl = "http://localhost:8080/receipts";

  constructor(private http: HttpClient) {
  }

  getAllReceipts(): Observable<any[]> {
    return this.http.get<any[]>(this.receiptsUrl);
  }
//get by company identity number
  getReceiptById(id: string): Observable<any> {
    return this.http.get<any>(this.receiptsUrl + `/${id}`);
  }

  saveReceipt(data: any) {
    return this.http.post(this.receiptsUrl, data);
  }

  deleteReceipt(id: number | string) {
    return this.http.delete(this.receiptsUrl + `/${id}`);
  }
}
