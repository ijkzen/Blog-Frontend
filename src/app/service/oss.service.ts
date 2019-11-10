import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OSS} from './bean/data/OSS';
import {BaseBean} from './bean/BaseBean';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OssService {

    constructor(
        private client: HttpClient
    ) {
    }

    setOSS(oss: OSS): Observable<BaseBean> {
        return this.client.post<BaseBean>('/oss/set', oss);
    }
}
