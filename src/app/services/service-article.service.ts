import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../models/article";

@Injectable({
  providedIn: 'root'
})
export class ServiceArticle {

  readonly articlesUrl = "http://localhost:8080/articles";

  constructor(private http: HttpClient) {
  }

  getAllArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.articlesUrl);
  }
//get by company identity number
  getArticleById(id: number): Observable<any> {
    return this.http.get<any>(this.articlesUrl + `/${id}`);
  }

  saveArticle(article: Article) {
    return this.http.post(this.articlesUrl, article);
  }

  updateArticle(id: number | string, article: Article) {
    return this.http.put(this.articlesUrl + `/${id}`, article);
  }

  deleteArticle(id: number | string) {
    return this.http.delete(this.articlesUrl + `/${id}`);
  }
}
