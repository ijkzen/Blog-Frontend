import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() {
  }

  getLink(): string {
    // https://api.nextto.top
    return 'http://127.0.0.1:8080';
  }
}
