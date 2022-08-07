import { Injectable } from '@angular/core';
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

  saveCancelItemShipment(id: number | string, itemShipment: ItemShipment) {
    this.getItemShipmentById(itemShipment.id).subscribe(existing => {
      existing.set(itemShipment.id);
      existing.set(itemShipment.stavkaIzdatniceIzdatnica.izdatnicaFirme);
      existing.set(itemShipment.stavkaIzdatniceRobe);
      existing.set(itemShipment.kolicina);
      existing.set(true);
      existing.set(Date.now());
      return this.http.put(this.itemShipmentsUrl + `/${id}`, itemShipment);
    })
  }
}
