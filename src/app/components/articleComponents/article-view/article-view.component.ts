import {Component, OnInit, ViewChild} from '@angular/core';
import {ArticleDTO} from "../../../models/article";
import {ServiceArticle} from "../../../services/service-article.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {ArticleAddComponent} from "../article-add/article-add.component";
import {MatSort} from "@angular/material/sort";
import {ArticleEditComponent} from "../article-edit/article-edit.component";
import {ArticleDeleteComponent} from "../article-delete/article-delete.component";

const ID = 'ID';
const NAME = 'Name';
const PRICE = 'Price';
const AMOUNT = 'Amount';
const UOM = 'Uom';
const DESCRIBE = 'Describe';
const ACTIONS = 'Actions';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  displayedColumns: string[] = [ID, NAME, PRICE, AMOUNT, UOM, DESCRIBE, ACTIONS];
  articlesList: ArticleDTO[] = [];
  dataSource: MatTableDataSource<ArticleDTO>;
  buttonEdit: string = "Edit";
  buttonDelete: string = "Delete";
  resultSave: string = 'save';
  resultUpdate: string = 'update';
  resultDelete: string = 'delete';
  noMatch: string = "No data matching the filter";
  private dialogRef: any;

  constructor(private service: ServiceArticle, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<ArticleDTO>(this.articlesList);
  }

  ngOnInit(): void {
    this.ngGetAll();
  }

  ngGetAll() {
    this.service.getAllArticles().subscribe(articles => {
      this.articlesList = articles;
      this.dataSource = new MatTableDataSource<ArticleDTO>(this.articlesList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAddArticle() {
    this.dialogRef = this.dialog
      .open(ArticleAddComponent, {width: '20%'});
    this.ngDialogResultAfterClose(this.resultSave);
  }

  ngUpdateArticle(id: number) {
    this.dialogRef = this.dialog
      .open(ArticleEditComponent, {width: '20%', data: id});
    this.ngDialogResultAfterClose(this.resultUpdate);
  }

  ngDeleteArticle(id: number) {
    this.dialogRef = this.dialog
      .open(ArticleDeleteComponent, {width: '20%', data: id});
    this.ngDialogResultAfterClose(this.resultDelete);
  }

  ngDialogResultAfterClose(action: string) {
    this.dialogRef.afterClosed().subscribe((result: string) => {
      if (result === action) this.ngGetAll()
      console.log(`Dialog result: ${result}`);
    });
  }

  ngApplyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    let paginator = this.dataSource.paginator;
    if (paginator) paginator.firstPage();
  }
}
