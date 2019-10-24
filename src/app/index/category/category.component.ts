import {Component, OnInit} from '@angular/core';
import {Category} from '../../service/bean/data/Category';
import {ArticleService} from '../../service/article.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
    this.articleService.getCategories()
      .subscribe(
        (result) => {
          this.categories = result.list;
        }
      );
  }

  getRow(): number[] {
    const length = this.categories.length;
    if (length === 0) {
      return [];
    } else {
      if (length / 5 !== 0) {
        return Array((length / 5) + 1).fill(0).map((x, i) => i);
      } else {
        return Array((length / 5)).fill(0).map((x, i) => i);
      }
    }
  }
}
