import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemReceiptDTO} from "../models/item-receipt";

@Injectable({
  providedIn: 'root'
})
export class ServiceItemReceipt {

  readonly itemReceiptUrl = "http://localhost:8080/itemReceipts";

  constructor(private http: HttpClient) {
  }

  getAllItemReceipts(): Observable<ItemReceiptDTO[]> {
    return this.http.get<ItemReceiptDTO[]>(this.itemReceiptUrl);
  }

//get by company identity number
  getItemReceiptById(id: number): Observable<any> {
    return this.http.get<any>(this.itemReceiptUrl + `/${id}`);
  }

  saveItemReceipt(itemReceipt: ItemReceiptDTO) {
    return this.http.post(this.itemReceiptUrl, itemReceipt);
  }

  cancelItemReceipt(id: number, itemReceipt: ItemReceiptDTO) {
    itemReceipt.storno = true;
    itemReceipt.datumStorno = new Date(Date.now());
    return this.http.put(this.itemReceiptUrl + `/${id}`, itemReceipt);
  }
}
