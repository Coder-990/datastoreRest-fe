import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticleDTO} from "../../../models/article";
import {ServiceArticle} from "../../../services/service-article.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss']
})
export class ArticleAddComponent implements OnInit {

  articleForm!: FormGroup;
  articleDTO!: ArticleDTO
  buttonClose: string = "Close";
  buttonSave: string = "Save";

  constructor(private formBuilder: FormBuilder, private service: ServiceArticle,
              private dialogRef: MatDialogRef<ArticleAddComponent>) {
  }

  ngOnInit(): void {
    this.ngGenerateArticleForm();
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

  ngSaveArticle() {
    this.articleDTO = this.ngBuildArticleDTO()
    this.service.saveArticle(this.articleDTO).subscribe({
      next: () => {
        alert("Article saved successfully");
        this.articleForm.reset();
        this.dialogRef.close('save');
      },
      error: () => {
        alert("Error while saving the record!");
      }
    });
  }
}
