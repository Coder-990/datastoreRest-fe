import {Component} from '@angular/core';
import {DialogMainMenuComponent} from "./dialogs/dialog-main-menu/dialog-main-menu.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datastoreRest-fe';

  constructor(private menuDialog: MatDialog) {

  }

  openDialog() {
    this.menuDialog.open(DialogMainMenuComponent, {
      width: '30%s'
    });
  }
}
