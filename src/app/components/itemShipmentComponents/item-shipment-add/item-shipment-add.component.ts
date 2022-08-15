import {Component, OnInit} from '@angular/core';
import {Article} from "../../../models/article";
import {ServiceArticle} from "../../../services/service-article.service";
import {Shipment} from "../../../models/shipment";
import {ServiceShipment} from "../../../services/service-shipment.service";

@Component({
  selector: 'app-item-shipment-add',
  templateUrl: './item-shipment-add.component.html',
  styleUrls: ['./item-shipment-add.component.scss']
})
export class ItemShipmentAddComponent implements OnInit {

  shipmentCompaniesList: Shipment[] = [];
  articleList: Article[] = [];

  constructor(private shipmentCompanyService: ServiceShipment, private articleService: ServiceArticle) {
  }

  ngOnInit(): void {
    this.ngGetAllCompanies();
    this.ngGetAllArticles();
  }

  ngGetAllCompanies() {
    return this.shipmentCompanyService.getAllShipments().subscribe(shipmentCompany => {
      this.shipmentCompaniesList = shipmentCompany;
    });
  }

  ngGetAllArticles() {
    return this.articleService.getAllArticles().subscribe(article => {
      this.articleList = article;
    });
  }

}
