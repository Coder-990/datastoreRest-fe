import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {CompanyViewComponent} from './components/companyComponents/company-view/company-view.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {PageNotFoundComponent} from './components/pageNotFound/page-not-found/page-not-found.component';
import {MainMenuComponent} from './components/mainMenu/main-menu/main-menu.component';
import {ArticleViewComponent} from './components/articleComponents/article-view/article-view.component';
import {ReceiptViewComponent} from "./components/receipts/receiptComponents/receipt-view/receipt-view.component";
import {ShipmentViewComponent} from './components/shipments/shipmentComponents/shipment-view/shipment-view.component';
import {
  ItemReceiptViewComponent
} from './components/receipts/itemReceiptComponents/item-receipt-view/item-receipt-view.component';
import {
  ItemShipmentViewComponent
} from './components/shipments/itemShipmentComponents/item-shipment-view/item-shipment-view.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {
  CancelItemShipmentViewComponent
} from "./components/shipments/cancelItemShipmentComponents/cancel-item-shipment-view/cancel-item-shipment-view.component";
import {
  CancelItemReceiptViewComponent
} from "./components/receipts/cancelItemReceiptComponents/cancel-item-receipt-view/cancel-item-receipt-view.component";
import {ArticleAddComponent} from './components/articleComponents/article-add/article-add.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReceiptAddComponent} from './components/receipts/receiptComponents/receipt-add/receipt-add.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {CompanyAddComponent} from './components/companyComponents/company-add/company-add.component';
import {ShipmentAddComponent} from './components/shipments/shipmentComponents/shipment-add/shipment-add.component';
import {
  ItemShipmentAddComponent
} from './components/shipments/itemShipmentComponents/item-shipment-add/item-shipment-add.component';
import {ItemReceiptAddComponent} from './components/receipts/itemReceiptComponents/item-receipt-add/item-receipt-add.component';
import {MatTabsModule} from "@angular/material/tabs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {
  ItemShipmentCancelComponent
} from './components/shipments/itemShipmentComponents/item-shipment-cancel/item-shipment-cancel.component';
import {
  ItemReceiptCancelComponent
} from './components/receipts/itemReceiptComponents/item-receipt-cancel/item-receipt-cancel.component';
import {CompanyEditComponent} from './components/companyComponents/company-edit/company-edit.component';
import { CompanyDeleteComponent } from './components/companyComponents/company-delete/company-delete.component';
import { ArticleEditComponent } from './components/articleComponents/article-edit/article-edit.component';
import { ReceiptDeleteComponent } from './components/receipts/receiptComponents/receipt-delete/receipt-delete.component';
import { ArticleDeleteComponent } from './components/articleComponents/article-delete/article-delete.component';
import { ShipmentDeleteComponent } from './components/shipments/shipmentComponents/shipment-delete/shipment-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyViewComponent,
    PageNotFoundComponent,
    MainMenuComponent,
    ArticleViewComponent,
    ReceiptViewComponent,
    ShipmentViewComponent,
    ItemReceiptViewComponent,
    ItemShipmentViewComponent,
    CancelItemShipmentViewComponent,
    CancelItemReceiptViewComponent,
    ArticleAddComponent,
    ReceiptAddComponent,
    CompanyAddComponent,
    ShipmentAddComponent,
    ItemShipmentAddComponent,
    ItemReceiptAddComponent,
    ItemShipmentCancelComponent,
    ItemReceiptCancelComponent,
    CompanyEditComponent,
    CompanyDeleteComponent,
    ArticleEditComponent,
    ReceiptDeleteComponent,
    ArticleDeleteComponent,
    ShipmentDeleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
