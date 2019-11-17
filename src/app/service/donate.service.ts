import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseBean} from './bean/BaseBean';

@Injectable({
    providedIn: 'root'
})
export class DonateService {

    constructor(
        private client: HttpClient
    ) {
    }

    uploadAlipay(alipay: any): Observable<BaseBean> {
        const form = new FormData();
        form.append('alipay', alipay, alipay.name);
        return this.client.post<BaseBean>(
            '/donate/alipay',
            form
        );
    }

    uploadWechat(wechat: any): Observable<BaseBean> {
        const form = new FormData();
        form.append('wechat', wechat, wechat.name);
        return this.client.post<BaseBean>(
            '/donate/wechat',
            form
        );
    }
}
