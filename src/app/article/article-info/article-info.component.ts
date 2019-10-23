import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../service/article.service';
import {ArticleBean} from '../../service/bean/ArticleBean';
import {Article} from '../../service/bean/data/Article';
import {BaseBean} from '../../service/bean/BaseBean';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss']
})
export class ArticleInfoComponent implements OnInit, AfterContentInit {

  article: Article = new Article(
    null,
    null,
    null,
    null,
    null,
    '',
    '',
    0,
    0,
    null,
    null,
    null,
    null
  );
  loading = true;
  private articleId: number;

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
              this.article = result.article;
              this.loading = false;
            }
          );
      }
    );
  }

  ngAfterContentInit(): void {
    this.articleService.viewArticle(this.articleId)
      .subscribe(
        (result: BaseBean) => {
        }
      );
  }
}
