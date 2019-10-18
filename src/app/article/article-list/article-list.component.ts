import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {ArticleListBean} from '../../service/bean/ArticleListBean';
import {Article} from '../../service/bean/Article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  data: Article[];

  constructor(
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
    this.articleService.getArticlesByPage(1)
      .subscribe(
        (result: ArticleListBean) => {
          this.data = result.list;
        }
      );
  }

}
