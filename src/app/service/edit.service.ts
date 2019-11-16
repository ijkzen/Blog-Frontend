import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NewArticlesBean} from './bean/NewArticlesBean';
import {BaseBean} from './bean/BaseBean';

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

    cancelEdit(id: number): Observable<BaseBean> {
        return this.client.get<BaseBean>('/article/cancel/' + id);
    }

    applyEdit(id: number): Observable<BaseBean> {
        return this.client.get<BaseBean>('/article/apply/' + id);
    }
}
