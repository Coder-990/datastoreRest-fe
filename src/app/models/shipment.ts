import {Company} from "./company";

export interface Shipment {
  id: number;
  datum: Date;
  izdatnicaFirme: Company;
}
