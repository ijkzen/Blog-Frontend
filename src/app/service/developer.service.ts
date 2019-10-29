import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DeveloperBean} from './bean/DeveloperBean';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor(
    private client: HttpClient
  ) {
  }

  getDeveloperInfo(): Observable<DeveloperBean> {
    return this.client.get<DeveloperBean>('/developer/info');
  }
}
