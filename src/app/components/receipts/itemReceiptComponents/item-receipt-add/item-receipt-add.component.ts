import {Component, OnInit} from '@angular/core';
import {ArticleDTO} from "../../../../models/article";
import {ServiceArticle} from "../../../../services/service-article.service";
import {ReceiptDTO} from "../../../../models/receipt";
import {ServiceReceipt} from "../../../../services/service-receipt.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceItemReceipt} from "../../../../services/service-item-receipt.service";
import {ItemReceiptDTO} from "../../../../models/item-receipt";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-item-receipt-add',
  templateUrl: './item-receipt-add.component.html',
  styleUrls: ['./item-receipt-add.component.scss']
})
export class ItemReceiptAddComponent implements OnInit {

  receiptCompanyList: ReceiptDTO[] = [];
  articleList: ArticleDTO[] = [];
  itemReceiptForm!: FormGroup
  itemReceiptDTO!: ItemReceiptDTO
  buttonSave: string = "Save";
  buttonClose: string = "Close";

  constructor(private formBuilder: FormBuilder, private receiptService: ServiceReceipt, private articleService: ServiceArticle,
              private dialogRef: MatDialogRef<ItemReceiptAddComponent>, private itemReceiptService: ServiceItemReceipt) {
  }

  ngOnInit(): void {
    this.ngGetAllCompaniesFromReceipt();
    this.ngGetAllArticles();
    this.ngGenerateReceiptForm()
  }

  ngGetAllCompaniesFromReceipt() {
    return this.receiptService.getAllReceipts().subscribe(receiptCompany => {
      this.receiptCompanyList = receiptCompany;
    });
  }

  ngGetAllArticles() {
    return this.articleService.getAllArticles().subscribe(article => {
      this.articleList = article;
    });
  }

  private ngGenerateReceiptForm() {
    this.itemReceiptForm = this.formBuilder.group({
      receiptCompany: ['', Validators.required],
      receiptArticle: ['', Validators.required],
      receiptAmount: ['', Validators.required]
    })
  }

  ngGetReceiptDTO() {
    return {
      id: this.itemReceiptForm.get("receiptCompany")?.value.id,
      datum: this.itemReceiptForm.get("receiptArticle")?.value.datum,
      primkaFirme: this.itemReceiptForm.get("receiptAmount")?.value.primkaFirme,
    }
  }

  ngGetArticleDTO() {
    return {
      id: this.itemReceiptForm.get("receiptArticle")?.value.id,
      nazivArtikla: this.itemReceiptForm.get("receiptArticle")?.value.nazivArtikla,
      cijena: this.itemReceiptForm.get("receiptArticle")?.value.cijena,
      kolicina: this.itemReceiptForm.get("receiptArticle")?.value.kolicina,
      jmj: this.itemReceiptForm.get("receiptArticle")?.value.jmj,
      opis: this.itemReceiptForm.get("receiptArticle")?.value.opis,
    }
  }

  ngBuildItemReceiptDTO() {
    return {
      id: null,
      stavkaPrimkePrimka: this.ngGetReceiptDTO(),
      stavkaPrimkeRobe: this.ngGetArticleDTO(),
      kolicina: this.itemReceiptForm.get("receiptAmount")?.value,
      storno: false,
      datumStorno: null,
    }
  }

  ngSaveItemReceipt() {
    this.itemReceiptDTO = this.ngBuildItemReceiptDTO()
    this.itemReceiptService.saveItemReceipt(this.itemReceiptDTO).subscribe({
      next: () => {
        alert("Item Receipt saved successfully");
        this.itemReceiptForm.reset();
        this.dialogRef.close('save');
      },
      error: () => {
        alert("Error while saving the record!");
      }
    });
  }
}
