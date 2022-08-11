import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyViewComponent} from "./components/companyComponents/company-view/company-view.component";
import {PageNotFoundComponent} from "./components/pageNotFound/page-not-found/page-not-found.component";
import {ArticleViewComponent} from "./components/articleComponents/article-view/article-view.component";
import {MainMenuComponent} from "./components/mainMenu/main-menu/main-menu.component";
import {ReceiptViewComponent} from "./components/receiptComponents/receipt-view/receipt-view.component";
import {ShipmentViewComponent} from "./components/shipmentComponents/shipment-view/shipment-view.component";
import {
  ItemShipmentViewComponent
} from "./components/itemShipmentComponents/item-shipment-view/item-shipment-view.component";
import {
  ItemReceiptViewComponent
} from "./components/itemReceiptComponents/item-receipt-view/item-receipt-view.component";

const routes: Routes = [
  {path: '', redirectTo: 'datastore/', pathMatch: 'full'},
  {path: 'datastore/mainMenu', component: MainMenuComponent},
  {path: 'companies/view', component: CompanyViewComponent},
  {path: 'articles/view', component: ArticleViewComponent},
  {path: 'receipts/view', component: ReceiptViewComponent},
  {path: 'shipments/view', component: ShipmentViewComponent},
  {path: 'itemShipments/view', component: ItemShipmentViewComponent},
  {path: 'itemReceipts/view', component: ItemReceiptViewComponent},
  {path: 'cancelItemShipments/view', component: ItemShipmentViewComponent},
  {path: 'cancelItemReceipts/view', component: ItemReceiptViewComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
