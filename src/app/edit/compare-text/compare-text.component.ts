import {Component, Input, OnInit} from '@angular/core';
import {EditArticleInterface} from '../EditArticleInterface';
import {Article} from '../../service/bean/data/Article';
import {ArticleService} from '../../service/article.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-compare-text',
  templateUrl: './compare-text.component.html',
  styleUrls: ['./compare-text.component.scss']
})
export class CompareTextComponent implements OnInit, EditArticleInterface {

  @Input()
  changed: Article;

  origin: Article;

  articleId: number;

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
              jQuery(document).ready(() => {
                jQuery('#mergely').mergely({
                  lhs: (setValue) => {
                    setValue(this.origin.content);
                  },
                  rhs: (setValue) => {
                    setValue(this.changed.content);
                  },
                  cmsettings: {mode: 'text/plain', readOnly: 'true'}
                });
              });
            }
          );
      }
    );
  }

}
