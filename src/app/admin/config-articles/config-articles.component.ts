import {Component, OnInit} from '@angular/core';
import {Article} from '../../service/bean/data/Article';
import {ArticleService} from '../../service/article.service';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
    selector: 'app-config-articles',
    templateUrl: './config-articles.component.html',
    styleUrls: ['./config-articles.component.scss']
})
export class ConfigArticlesComponent implements OnInit {

    list: Article[] = [];

    isLoading = true;

    constructor(
        private articleService: ArticleService,
        private router: Router,
        private notificationService: NzNotificationService
    ) {
    }

    ngOnInit() {
        this.loadArticles();
    }

    loadArticles() {
        this.articleService.getFullArticles()
            .subscribe(
                result => {
                    if (result.errCode === '000') {
                        this.list = result.list;
                        this.isLoading = false;
                    }
                }
            );
    }

    edit(articleId: number) {
        this.router.navigateByUrl('/edit/' + articleId);
    }

    delete(articleId: number) {
        this.articleService.deleteArticle(articleId)
            .subscribe(
                result => {
                    if (result.errCode === '000') {
                        this.notificationService.success(
                            '文章操作',
                            '文章删除成功'
                        );
                        this.reload();
                    }
                }
            );
    }

    reload() {
        setTimeout(
            () => {
                location.reload();
            },
            1500
        );
    }

}
