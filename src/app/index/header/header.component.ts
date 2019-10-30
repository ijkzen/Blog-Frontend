import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItem} from '../MenuItem';

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

  constructor() {
  }

  ngOnInit() {
  }

  click(text) {
    console.log(text);
    this.itemTap.emit(text);
  }

  getAvatar(): string {
    return localStorage.getItem('avatarUrl');
  }

  getName(): string {
    return localStorage.getItem('developerName');
  }
}
