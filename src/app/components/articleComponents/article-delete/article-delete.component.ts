import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticleDTO} from "../../../models/article";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServiceArticle} from "../../../services/service-article.service";

@Component({
  selector: 'app-article-delete',
  templateUrl: './article-delete.component.html',
  styleUrls: ['./article-delete.component.scss']
})
export class ArticleDeleteComponent implements OnInit {

  articleForm!: FormGroup;
  articleDTO!: ArticleDTO;
  buttonConfirm: string = "YES";
  buttonClose: string = "NO";

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<ArticleDeleteComponent>, private service: ServiceArticle) {
  }

  ngOnInit(): void {
    this.ngGenerateArticleForm();
    this.ngGetArticleDTO()
    this.articleDTO = this.ngBuildArticleDTO();
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

  ngGetArticleDTO() {
    this.articleForm.controls['articleName'].setValue(this.editData.nazivArtikla)
    this.articleForm.controls['articlePrice'].setValue(this.editData.cijena)
    this.articleForm.controls['articleAmount'].setValue(this.editData.kolicina)
    this.articleForm.controls['unitOfMeasure'].setValue(this.editData.jmj)
    this.articleForm.controls['describe'].setValue(this.editData.opis)
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

  ngDeleteArticleDTO() {
    this.service.deleteArticle(this.editData.id).subscribe({
      next: (_res) => {
        alert("Article deleted successfully");
        this.articleForm.reset();
        this.dialogRef.close('delete');
      },
      error: () => {
        alert("Error while deleting the record!");
      }
    });
  }
}

