import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ArticleListBean} from './bean/ArticleListBean';
import {ArticleBean} from './bean/ArticleBean';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private client: HttpClient
  ) {
  }

  getArticlesByPage(page: number): Observable<ArticleListBean> {
    return this.client.get<ArticleListBean>('/articles/list/DESC/' + page);
  }

  getArticleById(id: number): Observable<ArticleBean> {
    return this.client.get<ArticleBean>('/articles/' + id);
  }

  viewArticle(id: number) {
    return this.client.post<number>('/article/view', id);
  }
}
