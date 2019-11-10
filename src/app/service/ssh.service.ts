import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseBean} from './bean/BaseBean';

@Injectable({
    providedIn: 'root'
})
export class SshService {

    constructor(
        private client: HttpClient
    ) {
    }

    postSsh(ssh: File): Observable<BaseBean> {
        const formData = new FormData();
        formData.append('ssh', ssh);
        return this.client.post<BaseBean>(
            '/ssh/new',
            formData
        );
    }
}
