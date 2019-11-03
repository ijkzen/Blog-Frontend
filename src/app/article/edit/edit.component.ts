import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from '../../service/storage.service';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input()
  articleId: number;

  constructor(
    private storageService: StorageService,
    private modalService: NzModalService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  noLogin() {
    this.modalService.warning(
      {
        nzTitle: '警告！',
        nzContent: '请登录后再修改文章'
      }
    );
  }

  toEdit() {
    if (this.checkLogin()) {
      this.router.navigateByUrl('edit/' + this.articleId);
    } else {
      this.noLogin();
    }
  }


  checkLogin(): boolean {
    return this.storageService.getAuthorization() != null;
  }
}
