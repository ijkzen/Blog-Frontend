import {Component, OnInit} from '@angular/core';
import {Article} from '../../service/bean/data/Article';
import {ArticleService} from '../../service/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  data: Article[] = [];

  zero = false;

  constructor(
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
  }

  search(keywords: string) {
    this.articleService.getArticlesByKeywords(keywords)
      .subscribe(
        (result) => {
          this.data = result.list;
          if (result.list.length === 0) {
            this.zero = true;
          } else {
            this.zero = false;
          }
        }
      );
  }
}
