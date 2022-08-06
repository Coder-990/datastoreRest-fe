import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogMainMenuComponent} from "../../../dialogs/dialog-main-menu/dialog-main-menu.component";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  constructor(private menuDialog:MatDialog) {}
  openDialog() {
    this.menuDialog.open(DialogMainMenuComponent, {
      width:'30%s'
    });
  }

}
