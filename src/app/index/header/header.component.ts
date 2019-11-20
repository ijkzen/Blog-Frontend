import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItem} from '../MenuItem';
import {StorageService} from '../../service/storage.service';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {DeveloperService} from '../../service/developer.service';

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
      private storageService: StorageService,
      private modalService: NzModalService,
      private router: Router,
      private developerService: DeveloperService
  ) {
  }

  ngOnInit() {
  }

  click(text) {
    this.itemTap.emit(text);
  }

  getAvatar(): string {
    return this.storageService.getAvatarUrl();
  }

  getName(): string {
    return this.storageService.getDeveloperName();
  }

    openAdminDialog() {
        this.developerService.checkMaster()
            .subscribe(
                result => {
                    if (result.errCode === '000') {
                        this.modalService.confirm(
                            {
                                nzTitle: '操作',
                                nzContent: '',
                                nzOkText: '管理',
                                nzCancelText: '登出',
                                nzOnOk: () => this.toAdmin(),
                                nzOnCancel: () => this.logout()
                            }
                        );
                    }
                }
            );
    }

    logout() {
        this.storageService.removeAll();
    }

    toAdmin() {
        this.router.navigateByUrl('/home');
    }
}
