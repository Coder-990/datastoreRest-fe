import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceArticleService {

  readonly articlesUrl = "http://localhost:8080/articles";

  constructor(private http: HttpClient) {
  }

  getAllArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.articlesUrl);
  }
//get by company identity number
  getArticleById(id: string): Observable<any> {
    return this.http.get<any>(this.articlesUrl + `/${id}`);
  }

  saveArticle(data: any) {
    return this.http.post(this.articlesUrl, data);
  }

  updateArticle(id: number | string, data: any) {
    return this.http.put(this.articlesUrl + `/${id}`, data);
  }

  deleteArticle(id: number | string) {
    return this.http.delete(this.articlesUrl + `/${id}`);
  }
}
