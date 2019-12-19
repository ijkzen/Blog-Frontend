import {Component, OnInit} from '@angular/core';
import {IndexService} from '../../service/index.service';
import {IpCountInfo} from '../../service/bean/data/IpCountInfo';

@Component({
  selector: 'app-ip-count',
  templateUrl: './ip-count.component.html',
  styleUrls: ['./ip-count.component.scss']
})
export class IpCountComponent implements OnInit {

  list: IpCountInfo[] = [];

  loading = true;

  constructor(
    private indexService: IndexService
  ) {
  }

  ngOnInit() {
    this.indexService.ipCount()
      .subscribe(
        result => {
          this.list = result.list;
          this.loading = false;
        }
      );
  }

}
