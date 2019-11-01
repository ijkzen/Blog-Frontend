import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AboutBean} from './bean/AboutBean';
import {BaseBean} from './bean/BaseBean';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(
    private client: HttpClient
  ) {
  }

  getAbout(): Observable<AboutBean> {
    return this.client.get<AboutBean>('/about/me');
  }

  setAbout(about: string): Observable<BaseBean> {
    const result = new AboutBean(about);
    return this.client.post<BaseBean>('/about/me', result);
  }
}
