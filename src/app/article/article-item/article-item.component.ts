import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../service/bean/Article';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {

  @Input()
  article: Article;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  toArticle() {
    this.router.navigateByUrl('article/' + this.article.id);
  }
}
