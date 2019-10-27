import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MessagesBean} from './bean/MessagesBean';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private client: HttpClient
  ) {
  }


  sendMessage(message: string): Observable<MessagesBean> {
    return this.client.get<MessagesBean>(
      '/chat/' + message,
    );
  }
}
