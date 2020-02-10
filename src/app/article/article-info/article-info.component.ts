import {AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../service/article.service';
import {ArticleBean} from '../../service/bean/ArticleBean';
import {Article} from '../../service/bean/data/Article';
import {BaseBean} from '../../service/bean/BaseBean';
import {LinkService} from '../../service/link.service';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';
import {Comment} from '../../service/bean/data/Comment';
import {CommentService} from '../../service/comment.service';
import {StorageService} from '../../service/storage.service';
import {CodeService} from '../../service/code.service';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {MermaidService} from 'next-mermaid';
import {PlatformService} from '../../service/platform.service';

const ARTICLE_INFO_KEY = makeStateKey<Article>('article-info');

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss']
})
export class ArticleInfoComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ViewChild('target')
  target;

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
    null,
    null
  );

  comments: Comment[] = [];

  loading = true;
  articleId: number;
  donateDialog: NzModalRef;
  replyContent: string;
  originComment: Comment;
  @ViewChild('replyTitle')
  replyTitle: TemplateRef<{}>;

  @ViewChild('reply')
  reply: TemplateRef<{}>;

  replyDialog: NzModalRef;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private linkService: LinkService,
    private modalService: NzModalService,
    private commentService: CommentService,
    private storageService: StorageService,
    private codeService: CodeService,
    private readonly transferState: TransferState,
    private mermaidService: MermaidService,
    private platformService: PlatformService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.articleId = param.id;
        if (
          this.transferState.hasKey(ARTICLE_INFO_KEY) &&
          this.transferState.get(ARTICLE_INFO_KEY, null).article.id === Number(this.articleId)
        ) {
          this.article = this.transferState.get(ARTICLE_INFO_KEY, null).article;
        } else {
          this.getArticle();
        }
        this.getComments(this.articleId);
      }
    );
  }

  ngAfterViewInit(): void {
    this.addCopyButton();
    this.loading = false;
  }

  ngAfterContentInit(): void {
    this.articleService.viewArticle(this.articleId)
      .subscribe(
        (result: BaseBean) => {
        }
      );
  }

  getArticle() {
    this.articleService.getArticleById(this.articleId)
      .subscribe(
        (result: ArticleBean) => {
          this.transferState.set(ARTICLE_INFO_KEY, result);
          this.article = result.article;
          this.setTitle();
        }
      );
  }

  setTitle() {
    document.title = 'IJKZEN ' + this.article.title;
  }

  getAlipay(): string {
    return this.linkService.getBackendUrl() + '/donate/alipay';
  }

  getWechat(): string {
    return this.linkService.getBackendUrl() + '/donate/wechat';
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>): void {
    this.donateDialog = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzOkDisabled: true,
      nzFooter: null,
      nzClosable: false,
      nzCancelDisabled: true,
    });
  }

  getComments(articleId: number) {
    this.commentService.getComments(articleId)
      .subscribe(
        result => {
          this.comments = result.list;
        }
      );
  }

  openReplayDialog(origin: Comment) {
    this.originComment = origin;
    this.replyDialog = this.modalService.create({
      nzTitle: this.replyTitle,
      nzContent: this.reply,
      nzClosable: false,
      nzOnOk: () => this.replyComment()
    });
  }

  closeReplyDialog() {
    this.replyDialog.close();
  }

  replyComment() {
    const comment = new Comment();
    comment.articleId = this.articleId;
    comment.articleUrl = location.href;
    comment.authorId = Number(this.storageService.getDeveloperId());
    comment.authorName = this.storageService.getDeveloperName();
    comment.authorAvatar = this.storageService.getAvatarUrl();
    comment.replyId = this.originComment.id;
    comment.replyName = this.originComment.authorName;
    comment.createdTime = new Date();
    comment.content = this.replyContent;
    this.commentService.addComment(comment)
      .subscribe(
        result => {
          if (result.errCode === '000') {
            this.getComments(this.articleId);
            this.closeReplyDialog();
          }
        }
      );
  }

  reportComment(origin: Comment) {
    this.modalService.confirm(
      {
        nzTitle: '举报评论',
        nzContent: '确定举报该评论？',
        nzOnOk: () => this.confirmReport(origin)
      }
    );
  }

  confirmReport(origin: Comment) {
    this.commentService.reportComment(origin.id)
      .subscribe(
        result => {
          if (result.errCode === '000') {
            this.modalService.success(
              {
                nzContent: '举报成功！'
              }
            );
          }
        }
      );
  }

  addCopyButton() {
    if (this.article.content !== null && this.platformService.isBrowser() && this.target !== undefined) {
      this.codeService.addCodePasteButton();
      this.mermaidService.renderMermaid(this.target.nativeElement);
    }
  }
}
