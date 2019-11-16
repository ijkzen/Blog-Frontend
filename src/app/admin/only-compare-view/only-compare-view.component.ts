import {Component, OnInit} from '@angular/core';
import {EditArticleInterface} from '../../edit/EditArticleInterface';
import {Article} from '../../service/bean/data/Article';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../service/article.service';

@Component({
    selector: 'app-only-compare-view',
    templateUrl: './only-compare-view.component.html',
    styleUrls: ['./only-compare-view.component.scss']
})
export class OnlyCompareViewComponent implements OnInit, EditArticleInterface {

    changed: Article;
    origin: Article;

    originId: number;
    changedId: number;

    constructor(
        private route: ActivatedRoute,
        private articleService: ArticleService
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.originId = params.origin;
                this.changedId = params.changed;
                this.articleService.getArticleById(this.originId)
                    .subscribe(
                        result => {
                            this.origin = result.article;
                        }
                    );
                this.articleService.getArticleById(this.changedId)
                    .subscribe(
                        result => {
                            this.changed = result.article;
                        }
                    );
            }
        );
    }

}
