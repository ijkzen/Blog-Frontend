import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Article} from '../../service/bean/data/Article';
import {ArticleService} from '../../service/article.service';

@Component({
  selector: 'app-article-navigation',
  templateUrl: './article-navigation.component.html',
  styleUrls: ['./article-navigation.component.scss']
})
export class ArticleNavigationComponent implements OnInit, OnChanges {

  @Input()
  current = 0;

  previous: Article;

  next: Article;

  constructor(
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
  }

  work() {
    if (this.current !== 0 && this.current !== null) {
      this.articleService.getPreviousArticle(this.current)
        .subscribe(
          result => {
            this.previous = result.article;
          }
        );

      this.articleService.getNextArticle(this.current)
        .subscribe(
          result => {
            this.next = result.article;
          }
        );
    }
  }

  ngOnChanges(): void {
    this.work();
  }
}
