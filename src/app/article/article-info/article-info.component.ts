import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../service/article.service';
import {ArticleBean} from '../../service/bean/ArticleBean';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss']
})
export class ArticleInfoComponent implements OnInit {

  articleId: number;

  private article: string;

  private loading = true;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.articleId = param.id;
        this.articleService.getArticleById(this.articleId)
          .subscribe(
            (result: ArticleBean) => {
              this.article = result.article.content;
              this.loading = false;
            }
          );
      }
    );
  }

}
