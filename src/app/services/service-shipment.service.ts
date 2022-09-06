import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShipmentDTO} from "../models/shipment";

@Injectable({
  providedIn: 'root'
})
export class ServiceShipment {

  readonly shipmentsUrl = "http://localhost:8080/shipments";

  constructor(private http: HttpClient) {
  }

  getAllShipments(): Observable<ShipmentDTO[]> {
    return this.http.get<any[]>(this.shipmentsUrl);
  }
//get by company identity number
  getShipmentById(id: string): Observable<any> {
    return this.http.get<any>(this.shipmentsUrl + `/${id}`);
  }

  saveShipment(shipmentDTO: ShipmentDTO) {
    return this.http.post(this.shipmentsUrl, shipmentDTO);
  }

  deleteShipment(id: number | string) {
    return this.http.delete(this.shipmentsUrl + `/${id}`);
  }
}
