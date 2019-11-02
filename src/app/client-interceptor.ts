import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LinkService} from './service/link.service';
import {StorageService} from './service/storage.service';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  constructor(
    private linkService: LinkService,
    private storageService: StorageService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const baseUrl = this.linkService.getBackendUrl();
    let token = this.storageService.getAuthorization();
    if (token === null) {
      token = '';
    }
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
