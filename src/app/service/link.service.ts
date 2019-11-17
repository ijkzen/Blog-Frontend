import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() {
  }

  getBackendUrl(): string {
      return 'https://api.ijkzen.tech';
  }

  getFrontendUrl(): string {
      return 'https://ijkzen.tech';
  }
}
