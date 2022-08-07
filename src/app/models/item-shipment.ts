import {Article} from "./article";
import {Shipment} from "./shipment";

export interface ItemShipment {
  id: number;
  stavkaIzdatniceIzdatnica: Shipment;
  stavkaIzdatniceRobe: Article;
  kolicina: number;
  storno: boolean;
  datumStorno: Date;
}
