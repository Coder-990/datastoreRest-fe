export class ArticleDTO {
  id: number | null;
  nazivArtikla: string | null;
  kolicina: number | null;
  cijena: number | null;
  opis: string | null;
  jmj: string | null;

  constructor(formValue: Article) {
    this.id = formValue.id;
    this.nazivArtikla = formValue.nazivArtikla;
    this.kolicina = formValue.kolicina;
    this.cijena = formValue.cijena;
    this.opis = formValue.opis;
    this.jmj = formValue.jmj;
  }
}

export interface Article {
  id: number;
  nazivArtikla: string;
  kolicina: number;
  cijena: number;
  opis: string;
  jmj: string;
}
