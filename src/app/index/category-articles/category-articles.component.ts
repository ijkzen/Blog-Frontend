import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../service/article.service';
import {Article} from '../../service/bean/data/Article';

@Component({
  selector: 'app-category-articles',
  templateUrl: './category-articles.component.html',
  styleUrls: ['./category-articles.component.scss']
})
export class CategoryArticlesComponent implements OnInit {

  category: string;

  data: Article[];

  loading = true;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.category = params.category;
        this.articleService.getArticlesByCategory(this.category)
          .subscribe(
            (result) => {
              this.data = result.list;
              this.loading = false;
            }
          );
      }
    );
  }

}
