import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  static AUTHORIZATION = 'Authorization';

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const localUrl = 'http://127.0.0.1:8080';
    const baseUrl = 'https://api.nextto.top';
    let token = localStorage.getItem(HttpsInterceptor.AUTHORIZATION);
    if (token === null) {
      token = '';
    }
    let authRequest: HttpRequest<any>;
    authRequest = request.clone({
      url: localUrl + request.url,
      headers: new HttpHeaders({
        Authorization: token
      })
    });
    return next.handle(authRequest);
  }
}
