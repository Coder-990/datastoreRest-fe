import {Company} from "./company";

export interface Receipt {
  id: number;
  datum: Date;
  primkaFirme: Company;
}
