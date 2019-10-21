import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {ArticleListBean} from '../../service/bean/ArticleListBean';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  data = new Array(15).fill({}).map((i, index) => {
    return {
      id: null,
      fileName: null,
      author: null,
      shown: null,
      deleted: null,
      title: '',
      category: '',
      visits: 0,
      commentId: 0,
      createdTime: null,
      updatedTime: null,
      content: null,
      abstract: null
    };
  });

  loading = true;

  constructor(
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
    this.getArticlesByPage(1);
  }

  getArticlesByPage(page: number) {
    this.articleService.getArticlesByPage(1)
      .subscribe(
        (result: ArticleListBean) => {
          this.data = result.list;
          this.loading = false;
        }
      );
  }
}
