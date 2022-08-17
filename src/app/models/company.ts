export class CompanyDTO {
  id: number | null;
  oibFirme: string;
  nazivFirme: string;

  constructor(formValue: Company) {
    this.id = formValue.id;
    this.oibFirme = formValue.oibFirme;
    this.nazivFirme = formValue.nazivFirme;
  }
}

export interface Company {
  id: number | null;
  oibFirme: string;
  nazivFirme: string;
}
