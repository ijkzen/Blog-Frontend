import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseBean} from './bean/BaseBean';
import {CountBean} from './bean/CountBean';
import {IpCountsBean} from './bean/IpCountsBean';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(
    private client: HttpClient
  ) {
  }

  count(): Observable<BaseBean> {
    return this.client.get<BaseBean>('/index/count');
  }

  view(): Observable<CountBean> {
    return this.client.get<CountBean>('/index/view');
  }

  peopleCount(): Observable<CountBean> {
    return this.client.get<CountBean>('/index/people');
  }

  ipCount(): Observable<IpCountsBean> {
    return this.client.get<IpCountsBean>('/index/record');
  }
}
