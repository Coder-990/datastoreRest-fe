import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticleDTO} from "../../../models/article";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServiceArticle} from "../../../services/service-article.service";

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  articleForm!: FormGroup;
  articleDTO!: ArticleDTO;
  actionButton: string = "Update";

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<ArticleEditComponent>, private service: ServiceArticle) {
  }

  ngOnInit(): void {
    this.ngGenerateArticleForm();
    this.ngGetEditData()
  }

  private ngGenerateArticleForm() {
    this.articleForm = this.formBuilder.group({
      articleName: ['', Validators.required],
      articlePrice: ['', Validators.required],
      articleAmount: ['', Validators.required],
      unitOfMeasure: ['', Validators.required],
      describe: ['', Validators.required]
    })
  }

  ngGetEditData() {
    this.articleForm.controls['articleName'].setValue(this.editData.oibFirme)
    this.articleForm.controls['articlePrice'].setValue(this.editData.nazivFirme)
  }

  ngBuildArticleDTO() {
    return {
      id: null,
      nazivArtikla: this.articleForm.get("articleName")?.value,
      cijena: this.articleForm.get("articlePrice")?.value,
      kolicina: this.articleForm.get("articleAmount")?.value,
      jmj: this.articleForm.get("unitOfMeasure")?.value,
      opis: this.articleForm.get("describe")?.value
    }
  }

  ngBuildEditData() {
    return {
      id: null,
      oibFirme: this.articleForm.get("companyIdentityNumber")?.value,
      nazivFirme: this.articleForm.get("companyName")?.value
    }
  }

}
