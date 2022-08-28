import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemShipmentDTO} from "../models/item-shipment";

@Injectable({
  providedIn: 'root'
})
export class ServiceItemShipment {

  readonly itemShipmentsUrl = "http://localhost:8080/itemShipments";

  constructor(private http: HttpClient) {
  }

  getAllItemShipments(): Observable<any[]> {
    return this.http.get<any[]>(this.itemShipmentsUrl);
  }

  getItemShipmentById(id: number | null): Observable<any> {
    return this.http.get<any>(this.itemShipmentsUrl + `/${id}`);
  }

  saveItemShipment(itemShipment: ItemShipmentDTO) {
    return this.http.post(this.itemShipmentsUrl, itemShipment);
  }

  cancelItemShipment(id: number | null, itemShipment: ItemShipmentDTO) {
    itemShipment.storno = true;
    itemShipment.datumStorno = new Date(Date.now());
    return this.http.put(this.itemShipmentsUrl + `/${id}`, itemShipment);
  }
}
