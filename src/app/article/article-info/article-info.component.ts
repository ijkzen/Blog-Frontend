import {AfterContentInit, Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../service/article.service';
import {ArticleBean} from '../../service/bean/ArticleBean';
import {Article} from '../../service/bean/data/Article';
import {BaseBean} from '../../service/bean/BaseBean';
import {LinkService} from '../../service/link.service';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss']
})
export class ArticleInfoComponent implements OnInit, AfterContentInit {

  article: Article = new Article(
    null,
    null,
    null,
    null,
    null,
    '',
    '',
    0,
    0,
    null,
    null,
    null,
    null
  );
  loading = true;
  private articleId: number;
  tplModal: NzModalRef;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private linkService: LinkService,
    private modalService: NzModalService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.articleId = param.id;
        this.articleService.getArticleById(this.articleId)
          .subscribe(
            (result: ArticleBean) => {
              this.article = result.article;
              this.loading = false;
            }
          );
      }
    );
  }

  ngAfterContentInit(): void {
    this.articleService.viewArticle(this.articleId)
      .subscribe(
        (result: BaseBean) => {
        }
      );
  }

  getAlipay(): string {
    return this.linkService.getBackendUrl() + '/donate/alipay';
  }

  getWechat(): string {
    return this.linkService.getBackendUrl() + '/donate/wechat';
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzOkDisabled: true,
      nzFooter: null,
      nzClosable: false,
      nzCancelDisabled: true,
    });
  }
}
