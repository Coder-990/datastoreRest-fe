import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceShipment {

  readonly shipmentsUrl = "http://localhost:8080/shipments";

  constructor(private http: HttpClient) {
  }

  getAllShipments(): Observable<any[]> {
    return this.http.get<any[]>(this.shipmentsUrl);
  }
//get by company identity number
  getShipmentById(id: string): Observable<any> {
    return this.http.get<any>(this.shipmentsUrl + `/${id}`);
  }

  saveShipment(data: any) {
    return this.http.post(this.shipmentsUrl, data);
  }

  deleteShipment(id: number | string) {
    return this.http.delete(this.shipmentsUrl + `/${id}`);
  }
}
