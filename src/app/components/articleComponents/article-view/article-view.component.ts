import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Article} from "../../../models/article";
import {ServiceArticleService} from "../../../services/service-article.service";

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  articlesList$!: Observable<Article[]>;

  constructor(private service: ServiceArticleService) {}

  ngOnInit(): void {
    this.articlesList$ = this.service.getAllArticles();
  }

}
