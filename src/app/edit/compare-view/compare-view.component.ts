import {Component, Input, OnInit} from '@angular/core';
import {EditArticleInterface} from '../EditArticleInterface';
import {Article} from '../../service/bean/data/Article';
import {ArticleService} from '../../service/article.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-compare-view',
  templateUrl: './compare-view.component.html',
  styleUrls: ['./compare-view.component.scss']
})
export class CompareViewComponent implements OnInit, EditArticleInterface {

  @Input()
  changed: Article;

  origin: Article;

  articleId: number;

  loading = true;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.articleId = params.id;
        this.articleService.getArticleById(this.articleId)
          .subscribe(
            result => {
              this.origin = result.article;
            }
          );
      }
    );
  }

}
