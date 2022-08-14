import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemReceipt} from "../models/item-receipt";

@Injectable({
  providedIn: 'root'
})
export class ServiceItemReceipt {

  readonly itemReceiptUrl = "http://localhost:8080/itemReceipts";

  constructor(private http: HttpClient) {
  }

  getAllItemReceipts(): Observable<ItemReceipt[]> {
    return this.http.get<any[]>(this.itemReceiptUrl);
  }

//get by company identity number
  getItemReceiptById(id: number): Observable<any> {
    return this.http.get<any>(this.itemReceiptUrl + `/${id}`);
  }

  saveItemReceipt(itemReceipt: ItemReceipt) {
    return this.http.post(this.itemReceiptUrl, itemReceipt);
  }

  saveCancelItemReceipt(id: number | string, itemReceipt: ItemReceipt) {
    itemReceipt.storno = true;
    itemReceipt.datumStorno = new Date(Date.now());
    return this.http.put(this.itemReceiptUrl + `/${id}`, itemReceipt);
  }
}
