import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ArticleListBean} from './bean/ArticleListBean';
import {ArticleBean} from './bean/ArticleBean';
import {BaseBean} from './bean/BaseBean';
import {CategoryBean} from './bean/CategoryBean';
import {Article} from './bean/data/Article';
import {NewArticle} from './bean/data/NewArticle';

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
    return this.client.get<BaseBean>('/articles/view/' + id);
  }

  getCategories(): Observable<CategoryBean> {
    return this.client.get<CategoryBean>('/articles/categories');
  }

  getArticlesByCategory(category: string): Observable<ArticleListBean> {
    return this.client.get<ArticleListBean>('/articles/category/' + category);
  }

  getArticlesByKeywords(keywords: string): Observable<ArticleListBean> {
    return this.client.get<ArticleListBean>('/articles/search/' + keywords);
  }

  addArticle(article: Article): Observable<BaseBean> {
    return this.client.post<BaseBean>('/article/new', article);
  }

  addNewArticleRecord(record: NewArticle): Observable<BaseBean> {
    return this.client.post<BaseBean>('/article/edit', record);
  }

  getUrlCount(): Observable<CategoryBean> {
    return this.client.get<CategoryBean>('/url/list');
  }
}
