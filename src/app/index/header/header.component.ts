import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItem} from '../MenuItem';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: MenuItem[] = [
    {icon: 'home', text: 'Home'},
    {icon: 'appstore', text: 'Category'},
    {icon: 'smile', text: 'About'},
    {icon: 'play-circle', text: 'Game'},
    {icon: 'search', text: 'Search'}
  ];

  @Output()
  itemTap: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private storageService: StorageService
  ) {
  }

  ngOnInit() {
  }

  click(text) {
    console.log(text);
    this.itemTap.emit(text);
  }

  getAvatar(): string {
    return this.storageService.getAvatarUrl();
  }

  getName(): string {
    return this.storageService.getDeveloperName();
  }
}
