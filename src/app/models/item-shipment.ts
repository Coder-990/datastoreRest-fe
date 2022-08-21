import {Article, ArticleDTO} from "./article";
import {ShipmentDTO} from "./shipment";

export class ItemShipmentDTO{

  id: number | null;
  stavkaIzdatniceIzdatnica: ShipmentDTO;
  stavkaIzdatniceRobe: ArticleDTO;
  kolicina: number | null;
  storno: boolean;
  datumStorno: Date | null;

  constructor(formValue: ItemShipment) {
    this.id = formValue.id;
    this.stavkaIzdatniceIzdatnica = formValue.stavkaIzdatniceIzdatnica;
    this.stavkaIzdatniceRobe = formValue.stavkaIzdatniceRobe;
    this.kolicina = formValue.kolicina;
    this.storno = formValue.storno;
    this.datumStorno = formValue.datumStorno;
  }
}

export interface ItemShipment {
  id: number;
  stavkaIzdatniceIzdatnica: ShipmentDTO;
  stavkaIzdatniceRobe: Article;
  kolicina: number;
  storno: boolean;
  datumStorno: Date;
}
