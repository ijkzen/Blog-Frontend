import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() {
  }

  getBackendUrl(): string {
    // https://api.nextto.top
    return 'http://localhost:8080';
  }

  getFrontendUrl(): string {
    return 'http://localhost:4200';
  }
}
