import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemShipment} from "../models/item-shipment";

@Injectable({
  providedIn: 'root'
})
export class ServiceItemShipmentService {

  readonly itemShipmentsUrl = "http://localhost:8080/itemShipments";

  constructor(private http: HttpClient) {
  }

  getAllItemShipments(): Observable<any[]> {
    return this.http.get<any[]>(this.itemShipmentsUrl);
  }

//get by company identity number
  getItemShipmentById(id: number): Observable<any> {
    return this.http.get<any>(this.itemShipmentsUrl + `/${id}`);
  }

  saveItemShipment(itemShipment: ItemShipment) {
    return this.http.post(this.itemShipmentsUrl, itemShipment);
  }

  improvedSaveCancelItemShipment(id: number | string, itemShipment: ItemShipment) {
    itemShipment.storno = true;
    itemShipment.datumStorno = new Date(Date.now());
    return this.http.put(this.itemShipmentsUrl + `/${id}`, itemShipment);
  }
}
