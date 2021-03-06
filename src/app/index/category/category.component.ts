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
    private articleService: ArticleService,
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
      if (length / 4 !== 0) {
        return Array(Math.floor((length / 4)) + 1).fill(0).map((x, i) => i);
      } else {
        console.error(Array((length / 4)).fill(0).map((x, i) => i));
        return Array((length / 4)).fill(0).map((x, i) => i);
      }
    }
  }
}
