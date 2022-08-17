import {Component, OnInit} from '@angular/core';
import {Article} from "../../../models/article";
import {ServiceArticle} from "../../../services/service-article.service";
import {Receipt, ReceiptDTO} from "../../../models/receipt";
import {ServiceReceipt} from "../../../services/service-receipt.service";

@Component({
  selector: 'app-item-receipt-add',
  templateUrl: './item-receipt-add.component.html',
  styleUrls: ['./item-receipt-add.component.scss']
})
export class ItemReceiptAddComponent implements OnInit {

  receiptCompanyList: ReceiptDTO[] = [];
  articleList: Article[] = [];

  constructor(private receiptService: ServiceReceipt, private articleService: ServiceArticle) { }

  ngOnInit(): void {
    this.ngGetAllCompaniesFromReceipt();
    this.ngGetAllArticles();
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
}
