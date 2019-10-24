import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ArticleListBean} from './bean/ArticleListBean';
import {ArticleBean} from './bean/ArticleBean';
import {BaseBean} from './bean/BaseBean';
import {CategoryBean} from './bean/CategoryBean';

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

  viewArticle(id: number): Observable<BaseBean> {
    return this.client.post<BaseBean>('/articles/view', id);
  }

  getCategories(): Observable<CategoryBean> {
    return this.client.get<CategoryBean>('/articles/categories');
  }
}
