import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {EditArticleDirective} from '../edit-article.directive';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../service/article.service';
import {Article} from '../../service/bean/data/Article';
import {EditArticleComponent} from '../edit-article/edit-article.component';
import {EditArticleInterface} from '../EditArticleInterface';
import {CompareTextComponent} from '../compare-text/compare-text.component';

@Component({
  selector: 'app-edit-outline',
  templateUrl: './edit-outline.component.html',
  styleUrls: ['./edit-outline.component.scss']
})
export class EditOutlineComponent implements OnInit {

  current = 0;

  articleId: number;

  article: Article;

  @ViewChild(EditArticleDirective, {static: true})
  editTemplate: EditArticleDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
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
            result => {
              if (result.errCode === '000') {
                this.article = result.article;
                const factory = this.componentFactoryResolver.resolveComponentFactory(EditArticleComponent);
                const ref = this.editTemplate.viewContainerRef;
                ref.clear();
                const componentRef = ref.createComponent(factory);
                (componentRef.instance as EditArticleInterface).origin = this.article;
              }
            }
          );
      }
    );
  }

  toNext() {
    this.current++;
    switch (this.current) {
      case 1:
        this.toCompareText();
        break;
      default:
        break;
    }
  }

  toCompareText() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(CompareTextComponent);
    const ref = this.editTemplate.viewContainerRef;
    ref.clear();
    const componentRef = ref.createComponent(factory);
    (componentRef.instance as EditArticleInterface).origin = JSON.parse(localStorage.getItem('origin'));
    (componentRef.instance as EditArticleInterface).changed = JSON.parse(localStorage.getItem('changed'));
  }

  toEdit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(EditArticleComponent);
    const ref = this.editTemplate.viewContainerRef;
    ref.clear();
    const componentRef = ref.createComponent(factory);
    (componentRef.instance as EditArticleInterface).origin = JSON.parse(localStorage.getItem('changed'));
  }

  back() {
    this.current--;
    switch (this.current) {
      case 0:
        this.toEdit();
        break;
      default:
        break;
    }
  }
}
