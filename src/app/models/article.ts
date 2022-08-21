export class ArticleDTO {
  id: number | null;
  nazivArtikla: string | null;
  cijena: number | null;
  kolicina: number | null;
  jmj: string | null;
  opis: string | null;

  constructor(formValue: Article) {
    this.id = formValue.id;
    this.nazivArtikla = formValue.nazivArtikla;
    this.cijena = formValue.cijena;
    this.kolicina = formValue.kolicina;
    this.jmj = formValue.jmj;
    this.opis = formValue.opis;
  }
}

export interface Article {
  id: number;
  nazivArtikla: string;
  cijena: number;
  kolicina: number;
  jmj: string;
  opis: string;
}
