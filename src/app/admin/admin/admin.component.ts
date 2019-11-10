import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../service/storage.service';
import {Router} from '@angular/router';
import {NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {DeveloperService} from '../../service/developer.service';
import {IndexService} from '../../service/index.service';
import {ArticleService} from '../../service/article.service';
import {CommentService} from '../../service/comment.service';
import {MenuService} from '../../service/menu.service';
import {SshService} from '../../service/ssh.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    title = '后台界面';

    viewCount: number;

    peopleCount: number;

    articleCount: number;

    commentCount: number;

    menuItems: string[];

    constructor(
        private storageService: StorageService,
        private router: Router,
        private modalService: NzModalService,
        private developerService: DeveloperService,
        private indexService: IndexService,
        private articlesService: ArticleService,
        private commentService: CommentService,
        private menuItemService: MenuService,
        private sshService: SshService,
        private notificationService: NzNotificationService
    ) {
    }

    ngOnInit() {
        if (!this.storageService.getAuthorization()) {
            this.noLogin();
        } else {
            this.developerService.checkMaster().subscribe(
                result => {
                    if (result.errCode === '000') {
                        this.getViewCount();
                        this.getPeopleCount();
                        this.getArticleCount();
                        this.getCommentCount();
                        this.menuItems = this.menuItemService.getMenuItems();
                    } else {
                        this.noAuthorization();
                    }
                }
            );
        }
    }

    toHome() {
        this.router.navigateByUrl('');
    }

    noLogin() {
        this.modalService.confirm(
            {
                nzTitle: '当前未登录',
                nzContent: '请登录后，再试一试',
                nzOnOk: () => this.toHome(),
                nzOnCancel: () => this.toHome()
            }
        );
    }

    noAuthorization() {
        this.modalService.confirm(
            {
                nzTitle: '权限不足',
                nzContent: '当前用户不是站长，无权浏览当前界面',
                nzOnOk: () => this.toHome(),
                nzOnCancel: () => this.toHome()
            }
        );
    }

    getViewCount() {
        this.indexService.view()
            .subscribe(
                result => {
                    this.viewCount = result.count;
                }
            );
    }

    getPeopleCount() {
        this.indexService.peopleCount()
            .subscribe(
                result => {
                    this.peopleCount = result.count;
                }
            );
    }

    getArticleCount() {
        this.articlesService.getArticlesByPage(1)
            .subscribe(
                result => {
                    this.articleCount = result.size;
                }
            );
    }

    getCommentCount() {
        this.commentService.getCount()
            .subscribe(
                result => {
                    this.commentCount = result.count;
                }
            );
    }

    clickMenuItem(item: string) {
        // '配置邮件', '对象存储', '添加.ssh', 'API访问情况',
        //     '举报评论列表', '文章修改记录', '添加捐赠图片', '新增评论'
        switch (item) {
            case '配置邮件':
                this.toConfigMail();
                break;
            case '对象存储':
                this.toConfigOOS();
                break;
            case '添加.ssh':
                this.toConfigSSH();
                break;
            case 'API访问情况':
                this.toAPICondition();
                break;
            case '举报评论列表':
                this.toReportList();
                break;
            case '文章修改记录':
                this.toEditArticleList();
                break;
            case '添加捐赠图片':
                this.toConfigDonate();
                break;
            case '新增评论':
                this.toNewComment();
                break;
            default:
                break;

        }
    }

    toConfigMail() {
        this.router.navigateByUrl('config/mail');
    }

    toConfigOOS() {
        this.router.navigateByUrl('config/oss');
    }

    toConfigSSH() {
        this.modalService.confirm({
            nzTitle: '添加ssh私钥文件',
            nzContent: '请选择用户目录下的 .ssh/id_rsa 文件，此文件用于向Github提交文本，不会用作他途',
            nzOnOk: () => this.selectSsh()
        });
    }

    toAPICondition() {
        this.router.navigateByUrl('url/list');
    }

    toReportList() {

    }

    toEditArticleList() {

    }

    toConfigDonate() {

    }

    toNewComment() {

    }

    selectSsh() {
        document.getElementById('ssh-select').click();
    }

    uploadSsh(files: FileList) {
        this.sshService.postSsh(files.item(0))
            .subscribe(
                result => {
                    if (result.errCode === '000') {
                        this.notificationService.success(
                            '文件发送成功',
                            '(=・ω・=)'
                        );
                    } else {
                        this.notificationService.error(
                            '文件发送失败',
                            '请到服务器查看详情'
                        );
                    }
                }
            );
    }
}
