import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReceiptDTO} from "../models/receipt";

@Injectable({
  providedIn: 'root'
})
export class ServiceReceipt {

  readonly receiptsUrl = "http://localhost:8080/receipts";

  constructor(private http: HttpClient) {
  }

  getAllReceipts(): Observable<ReceiptDTO[]> {
    return this.http.get<any[]>(this.receiptsUrl);
  }
//get by company identity number
  getReceiptById(id: string): Observable<any> {
    return this.http.get<any>(this.receiptsUrl + `/${id}`);
  }

  saveReceipt(receiptDTO: ReceiptDTO) {
    return this.http.post(this.receiptsUrl, receiptDTO);
  }

  deleteReceipt(id: number | string) {
    return this.http.delete(this.receiptsUrl + `/${id}`);
  }
}
