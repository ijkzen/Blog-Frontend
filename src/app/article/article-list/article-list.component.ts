import {Article} from './../../service/bean/data/Article';
import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {ArticleListBean} from '../../service/bean/ArticleListBean';
import {makeStateKey, TransferState} from '@angular/platform-browser';

const LOADED_KEY = makeStateKey<boolean>('loaded');
const ARTICLE_LIST_KEY = makeStateKey<ArticleListBean>('article-list');

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  page = 1;
  totalSize = 45;

  data: Article[];

  loading = true;

  constructor(
    private articleService: ArticleService,
    private readonly transferState: TransferState
  ) {}

  ngOnInit() {
    if (this.transferState.hasKey(LOADED_KEY)) {
      this.loading = this.transferState.get(LOADED_KEY, true);
    }
    if (this.loading) {
      this.getArticlesByPage(1);
    } else {
      this.data = this.transferState.get(ARTICLE_LIST_KEY, null).list;
    }
  }

  getArticlesByPage(id: number) {
    this.articleService
      .getArticlesByPage(id)
      .subscribe((result: ArticleListBean) => {
        this.data = result.list;
        this.totalSize = result.size;
        this.loading = false;
        this.transferState.set(LOADED_KEY, this.loading);
        this.transferState.set(ARTICLE_LIST_KEY, result);

      });
  }
}
