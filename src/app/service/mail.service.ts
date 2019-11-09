import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Email} from './bean/data/Email';
import {Observable} from 'rxjs';
import {BaseBean} from './bean/BaseBean';
import {TestEmail} from './bean/data/TestEmail';

@Injectable({
    providedIn: 'root'
})
export class MailService {

    constructor(
        private client: HttpClient
    ) {
    }

    configEmail(email: Email): Observable<BaseBean> {
        return this.client.post<BaseBean>('/mail/new', email);
    }

    testEmail(testEmail: TestEmail): Observable<BaseBean> {
        return this.client.post<BaseBean>('/mail/test', testEmail);
    }
}
