import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  Response
} from '@angular/http';
import { Observable } from 'rxjs';

import { Article } from './article';

@Injectable()
export class ArticleService {
  private endpoint = 'http://localhost:3000/api/v1/articles';

  constructor(private http: Http) { }

  getArticles(skip = 0, limit = 5): Observable<Article[]> {
    return this.http.get(this.endpoint)
      .map((response: Response) => response.json() as Article[])
  }
}
