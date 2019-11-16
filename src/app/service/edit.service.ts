import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NewArticlesBean} from './bean/NewArticlesBean';

@Injectable({
    providedIn: 'root'
})
export class EditService {

    constructor(
        private client: HttpClient
    ) {
    }

    getEditList(): Observable<NewArticlesBean> {
        return this.client.get<NewArticlesBean>('/article/edit/list');
    }
}
