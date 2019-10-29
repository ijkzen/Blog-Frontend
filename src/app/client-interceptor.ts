import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LinkService} from './service/link.service';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  static AUTHORIZATION = 'Authorization';

  constructor(
    private linkService: LinkService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const baseUrl = this.linkService.getLink();
    let token = localStorage.getItem(HttpsInterceptor.AUTHORIZATION);
    if (token === null) {
      token = '';
    }
    token = 'MDQ6VXNlcjMxNTMxODM2';
    let authRequest: HttpRequest<any>;
    authRequest = request.clone({
      url: baseUrl + request.url,
      headers: new HttpHeaders({
        Authorization: token
      })
    });
    return next.handle(authRequest);
  }
}
