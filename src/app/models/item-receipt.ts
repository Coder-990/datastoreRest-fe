import {Receipt} from "./receipt";
import {Article} from "./article";

export interface ItemReceipt {
  id:number;
  stavkaPrimkePrimka: Receipt;
  stavkaPrimkeRobe: Article;
  kolicina: number;
  storno: boolean;
  datumStorno: Date;
}
