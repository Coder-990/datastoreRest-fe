import {Component, OnInit} from '@angular/core';
import {ArticleDTO} from "../../../models/article";
import {ServiceArticle} from "../../../services/service-article.service";
import {ShipmentDTO} from "../../../models/shipment";
import {ServiceShipment} from "../../../services/service-shipment.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemShipmentDTO} from "../../../models/item-shipment";
import {ServiceItemShipment} from "../../../services/service-item-shipment.service";

@Component({
  selector: 'app-item-shipment-add',
  templateUrl: './item-shipment-add.component.html',
  styleUrls: ['./item-shipment-add.component.scss']
})
export class ItemShipmentAddComponent implements OnInit {

  shipmentCompaniesList: ShipmentDTO[] = [];
  articleList: ArticleDTO[] = [];
  itemShipmentForm!: FormGroup
  itemShipmentDTO!: ItemShipmentDTO
  actionButton: string = "Save";

  constructor(private formBuilder: FormBuilder, private shipmentCompanyService: ServiceShipment,
              private articleService: ServiceArticle, private itemShipmentService: ServiceItemShipment) {
  }

  ngOnInit(): void {
    this.ngGetAllCompanies();
    this.ngGetAllArticles();
    this.ngGenerateShipmentForm()
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

  ngGenerateShipmentForm() {
    this.itemShipmentForm = this.formBuilder.group({
      shipmentCompany: ['', Validators.required],
      shipmentArticle: ['', Validators.required],
      shipmentAmount: ['', Validators.required]
    })
  }

  ngGetShipmentDTO() {
    return {
      id: this.itemShipmentForm.get("shipmentCompany")?.value.id,
      datum: this.itemShipmentForm.get("shipmentCompany")?.value.datum,
      izdatnicaFirme: this.itemShipmentForm.get("shipmentCompany")?.value.izdatnicaFirme,
    }
  }

  ngGetArticleDTO() {
    return {
      id: this.itemShipmentForm.get("shipmentArticle")?.value.id,
      nazivArtikla: this.itemShipmentForm.get("shipmentArticle")?.value.nazivArtikla,
      cijena: this.itemShipmentForm.get("shipmentArticle")?.value.cijena,
      kolicina: this.itemShipmentForm.get("shipmentArticle")?.value.kolicina,
      jmj: this.itemShipmentForm.get("shipmentArticle")?.value.jmj,
      opis: this.itemShipmentForm.get("shipmentArticle")?.value.opis,
    }
  }

  ngBuildItemShipmentDTO() {
    return {
      id: null,
      stavkaIzdatniceIzdatnica: this.ngGetShipmentDTO(),
      stavkaIzdatniceRobe: this.ngGetArticleDTO(),
      kolicina: this.itemShipmentForm.get("shipmentAmount")?.value,
      storno: false,
      datumStorno: null,
    }
  }

  ngSaveItemShipment() {
    this.itemShipmentDTO = this.ngBuildItemShipmentDTO()
    this.itemShipmentService.saveItemShipment(this.itemShipmentDTO).subscribe(itemShipmentDTO => {
      this.itemShipmentDTO = <ItemShipmentDTO>itemShipmentDTO
      console.log("Save success ", this.itemShipmentDTO);
    });
  }

}
