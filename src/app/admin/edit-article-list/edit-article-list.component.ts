import {Component, OnInit} from '@angular/core';
import {NewArticle} from '../../service/bean/data/NewArticle';
import {EditService} from '../../service/edit.service';
import {Router} from '@angular/router';
import {StorageService} from "../../service/storage.service";

@Component({
    selector: 'app-edit-article-list',
    templateUrl: './edit-article-list.component.html',
    styleUrls: ['./edit-article-list.component.scss']
})
export class EditArticleListComponent implements OnInit {

    isLoading = true;

    list: NewArticle[] = [];

    constructor(
        private editService: EditService,
        private router: Router,
        private storageService: StorageService
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

    toCompare(origin: number, changed: number, id: number) {
        this.router.navigateByUrl(`compare/${origin}/${changed}`);
        this.storageService.setNewArticleId(id);
    }
}
