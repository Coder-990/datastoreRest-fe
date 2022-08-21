import {Company, CompanyDTO} from "./company";

export class ShipmentDTO{
  id: number | null;
  datum: string | null;
  izdatnicaFirme: CompanyDTO;

  constructor(formValue: Shipment){
    this.id = formValue.id;
    this.datum = formValue.datum.toISOString();
    this.izdatnicaFirme = formValue.izdatnicaFirme;
  }
}

export interface Shipment {
  id: number;
  datum: Date;
  izdatnicaFirme: Company;
}
