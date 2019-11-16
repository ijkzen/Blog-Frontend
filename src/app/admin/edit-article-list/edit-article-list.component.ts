import {Component, OnInit} from '@angular/core';
import {NewArticle} from '../../service/bean/data/NewArticle';
import {EditService} from '../../service/edit.service';

@Component({
    selector: 'app-edit-article-list',
    templateUrl: './edit-article-list.component.html',
    styleUrls: ['./edit-article-list.component.scss']
})
export class EditArticleListComponent implements OnInit {

    isLoading = true;

    list: NewArticle[] = [];

    constructor(
        private editService: EditService
    ) {
    }

    ngOnInit() {
        this.editService.getEditList()
            .subscribe(
                result => {
                    this.isLoading = false;
                    this.list = result.list;
                }
            );
    }

}
