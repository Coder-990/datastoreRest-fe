import {Company, CompanyDTO} from "./company";

export class ReceiptDTO {
  id: number | null;
  datum: string;
  primkaFirme: CompanyDTO;

  constructor(formValue: Receipt) {
    this.id = formValue.id;
    this.datum= formValue.datum.toISOString();
    this.primkaFirme= formValue.primkaFirme;
  }
}
export interface Receipt {
  id: number;
  datum: Date;
  primkaFirme: Company;
}
