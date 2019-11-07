import {AfterContentInit, Component, OnInit, TemplateRef} from '@angular/core';
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

  comments: Comment[] = [];
  loading = true;
  articleId: number;
  tplModal: NzModalRef;
  replyContent: string;
  replyVisible = false;
  originComment: Comment;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private linkService: LinkService,
    private modalService: NzModalService,
    private commentService: CommentService,
    private storageService: StorageService,
    private codeService: CodeService
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
        this.getComments(this.articleId);
      }
    );
  }

  ngAfterContentInit(): void {
    this.articleService.viewArticle(this.articleId)
      .subscribe(
        (result: BaseBean) => {
        }
      );
    setTimeout(() => {
        this.codeService.addCodePasteButton();
      },
      2000);
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

  getComments(articleId: number) {
    this.commentService.getComments(articleId)
      .subscribe(
        result => {
          this.comments = result.list;
          console.log(this.comments);
        }
      );
  }

  openReplyDialog() {
    this.replyVisible = true;
  }

  setOriginComment(origin: Comment) {
    this.originComment = origin;
    this.openReplyDialog();
  }

  closeReplyDialog() {
    this.replyVisible = false;
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
}
