import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild} from '@angular/core';
import {EditArticleDirective} from '../edit-article.directive';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../service/article.service';
import {Article} from '../../service/bean/data/Article';
import {EditArticleComponent} from '../edit-article/edit-article.component';
import {EditArticleInterface} from '../EditArticleInterface';
import {CompareTextComponent} from '../compare-text/compare-text.component';
import {NzModalService} from 'ng-zorro-antd';
import {StorageService} from '../../service/storage.service';
import {CompareViewComponent} from '../compare-view/compare-view.component';

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

  loading = true;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private modalService: NzModalService,
    private storageService: StorageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    if (this.storageService.getAuthorization()) {
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
                  this.loading = false;
                }
              }
            );
        }
      );
    } else {
      this.modalService.confirm({
          nzTitle: '权限不足',
          nzContent: '当前没有登录，请登录后再操作',
          nzClosable: false,
          nzCancelDisabled: true,
          nzOnOk: instance => this.toHome(),
          nzOkText: '确认'
        }
      );
    }
  }

  toNext() {
    this.current++;
    switch (this.current) {
      case 1:
        this.toCompareText();
        break;

      case 2:
        this.toCompareView();
        break;

      default:
        break;
    }
  }

  toHome() {
    this.router.navigateByUrl('');
  }

  toEdit() {
    this.toTarget(EditArticleComponent, true);
  }

  toCompareText() {
    this.toTarget(CompareTextComponent);
  }

  toCompareView() {
    this.toTarget(CompareViewComponent);
  }

  toTarget(component: Type<any>, assignOrigin: boolean = false) {
    this.loading = true;
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const ref = this.editTemplate.viewContainerRef;
    ref.clear();
    const componentRef = ref.createComponent(factory);
    (componentRef.instance as EditArticleInterface).changed = JSON.parse(localStorage.getItem('changed'));
    if (assignOrigin) {
      (componentRef.instance as EditArticleInterface).origin = JSON.parse(localStorage.getItem('changed'));
    }
    this.loading = false;
  }

  back() {
    this.current--;
    switch (this.current) {
      case 0:
        this.toEdit();
        break;

      case 1:
        this.toCompareText();
        break;

      default:
        break;
    }
  }
}
