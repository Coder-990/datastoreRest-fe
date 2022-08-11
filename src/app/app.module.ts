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
import {DialogCompanyComponent} from './dialogs/dialog-company/dialog-company.component';
import {DialogMainMenuComponent} from './dialogs/dialog-main-menu/dialog-main-menu.component';
import {CompanyViewComponent} from './components/companyComponents/company-view/company-view.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {PageNotFoundComponent} from './components/pageNotFound/page-not-found/page-not-found.component';
import {MainMenuComponent} from './components/mainMenu/main-menu/main-menu.component';
import { ArticleViewComponent } from './components/articleComponents/article-view/article-view.component';
import {ReceiptViewComponent} from "./components/receiptComponents/receipt-view/receipt-view.component";
import { ShipmentViewComponent } from './components/shipmentComponents/shipment-view/shipment-view.component';
import { ItemReceiptViewComponent } from './components/itemReceiptComponents/item-receipt-view/item-receipt-view.component';
import { ItemShipmentViewComponent } from './components/itemShipmentComponents/item-shipment-view/item-shipment-view.component';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    DialogCompanyComponent,
    DialogMainMenuComponent,
    CompanyViewComponent,
    PageNotFoundComponent,
    MainMenuComponent,
    ArticleViewComponent,
    ReceiptViewComponent,
    ShipmentViewComponent,
    ItemReceiptViewComponent,
    ItemShipmentViewComponent
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
        MatTooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
