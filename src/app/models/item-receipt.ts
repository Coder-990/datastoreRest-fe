import {Article, ArticleDTO} from "./article";
import {ReceiptDTO} from "./receipt";

export class ItemReceiptDTO {
  id: number | null;
  stavkaPrimkePrimka: ReceiptDTO;
  stavkaPrimkeRobe: ArticleDTO;
  kolicina: number | null;
  storno: boolean;
  datumStorno: Date;

  constructor(formValue: ItemReceipt) {
    this.id = formValue.id;
    this.stavkaPrimkePrimka = formValue.stavkaPrimkePrimka;
    this.stavkaPrimkeRobe = formValue.stavkaPrimkeRobe;
    this.kolicina = formValue.kolicina;
    this.storno = formValue.storno;
    this.datumStorno = formValue.datumStorno;
  }
}

export interface ItemReceipt {
  id: number;
  stavkaPrimkePrimka: ReceiptDTO;
  stavkaPrimkeRobe: Article;
  kolicina: number;
  storno: boolean;
  datumStorno: Date;
}
