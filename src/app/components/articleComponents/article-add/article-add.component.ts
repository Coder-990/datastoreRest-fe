import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ArticleDTO} from "../../../models/article";
import {ServiceArticle} from "../../../services/service-article.service";

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss']
})
export class ArticleAddComponent implements OnInit {

  articleForm!: FormGroup;
  articleDto!: ArticleDTO

  constructor(private formBuilder: FormBuilder, private service: ServiceArticle) {
  }

  ngOnInit(): void {
  this.ngGenerateArticleForm();
  }

  ngCreateArticle() {

  }

  private ngGenerateArticleForm() {
    this.articleForm = this.formBuilder.group({
      articleName: ['',]
    })
  }
}
