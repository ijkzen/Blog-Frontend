import {Component, OnInit} from '@angular/core';
import {EditArticleInterface} from '../../edit/EditArticleInterface';
import {Article} from '../../service/bean/data/Article';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../service/article.service';

@Component({
    selector: 'app-only-compare-text',
    templateUrl: './only-compare-text.component.html',
    styleUrls: ['./only-compare-text.component.scss']
})
export class OnlyCompareTextComponent implements OnInit, EditArticleInterface {

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
                            this.articleService.getArticleById(this.changedId)
                                .subscribe(
                                    latest => {
                                        this.changed = latest.article;
                                        this.setView();
                                    }
                                );
                        }
                    );
            }
        );
    }

    setView() {
        jQuery(document).ready(() => {
            jQuery('#mergely').mergely({
                lhs: (setValue) => {
                    setValue(this.origin.content);
                },
                rhs: (setValue) => {
                    setValue(this.changed.content);
                },
                cmsettings: {mode: 'text/plain', readOnly: 'true'}
            });
        });
    }

}
