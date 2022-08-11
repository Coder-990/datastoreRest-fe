import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Article} from "../../../models/article";
import {ServiceArticleService} from "../../../services/service-article.service";


const ID = 'ID';
const NAME = 'Name';
const PRICE = 'Price';
const AMOUNT = 'Amount';
const UOM = 'Uom';
const DESCRIBE = 'Describe';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  displayedColumns: string[] = [ID, NAME, PRICE, AMOUNT, UOM, DESCRIBE];
  articlesList$!: Observable<Article[]>;

  constructor(private service: ServiceArticleService) {
  }

  ngOnInit(): void {
    this.articlesList$ = this.service.getAllArticles();
  }

}
