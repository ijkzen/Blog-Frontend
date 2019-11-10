import {Component, OnInit} from '@angular/core';
import {Category} from '../../service/bean/data/Category';
import {ArticleService} from '../../service/article.service';

@Component({
    selector: 'app-url-count',
    templateUrl: './url-count.component.html',
    styleUrls: ['./url-count.component.scss']
})
export class UrlCountComponent implements OnInit {

    list: Category[] = [];

    constructor(
        private articleService: ArticleService
    ) {
    }

    ngOnInit() {
        this.articleService.getUrlCount()
            .subscribe(
                result => {
                    this.list = result.list;
                }
            );
    }

}
