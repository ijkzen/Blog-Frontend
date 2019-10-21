import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {ArticleListBean} from '../../service/bean/ArticleListBean';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  page = 1;
  totalSize = 45;

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

  getArticlesByPage(id: number) {
    this.articleService.getArticlesByPage(id)
      .subscribe(
        (result: ArticleListBean) => {
          this.data = result.list;
          this.totalSize = result.size;
          this.loading = false;
        }
      );
  }
}
