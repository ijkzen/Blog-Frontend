import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  static Authorization = 'Authorization';

  static DEVELOPER_NAME = 'developerName';

  static DEVELOPER_ID = 'developerId';

  static AVATAR_URL = 'avatarUrl';

  static HTML_URL = 'htmlUrl';

  constructor() {
  }

  getAuthorization(): string {
    return localStorage.getItem('Authorization');
  }

  setAuthorization(authorization: string) {
    localStorage.setItem(StorageService.Authorization, authorization);
  }

  getDeveloperName(): string {
    return localStorage.getItem('developerName');
  }

  setDeveloperName(name: string) {
    return localStorage.setItem(StorageService.DEVELOPER_NAME, name);
  }

  getDeveloperId() {
    return localStorage.getItem('developerId');
  }

  setDeveloperId(id: number) {
    localStorage.setItem(StorageService.DEVELOPER_ID, '' + id);
  }

  getAvatarUrl() {
    return localStorage.getItem('avatarUrl');
  }

  setAvatarUrl(avatar: string) {
    localStorage.setItem(StorageService.AVATAR_URL, avatar);
  }

  getDeveloperHtml() {
    return localStorage.getItem('htmlUrl');
  }

  setDeveloperHtml(html: string) {
    localStorage.setItem(StorageService.HTML_URL, html);
  }

  getNewArticleId(): string {
    return localStorage.getItem('NewArticleId');
  }

  setNewArticleId(newArticleId: number) {
    localStorage.setItem('NewArticleId', newArticleId + '');
  }

  removeAll() {
    localStorage.clear();
    location.reload();
  }
}
