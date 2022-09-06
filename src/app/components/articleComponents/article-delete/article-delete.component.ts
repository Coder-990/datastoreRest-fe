import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServiceArticle} from "../../../services/service-article.service";

@Component({
  selector: 'app-article-delete',
  templateUrl: './article-delete.component.html',
  styleUrls: ['./article-delete.component.scss']
})
export class ArticleDeleteComponent implements OnInit {

  articleForm!: FormGroup;
  buttonConfirm: string = "YES";
  buttonClose: string = "NO";

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<ArticleDeleteComponent>, private service: ServiceArticle) {
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

  ngDeleteArticleDTO() {
    this.service.deleteArticle(this.editData.id).subscribe({
      next: () => {
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

