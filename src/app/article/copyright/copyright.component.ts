import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../service/bean/data/Article';
import {PlatformService} from '../../service/platform.service';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  @Input()
  article: Article;

  link: string;

  constructor(
      private platformService: PlatformService
  ) {
  }

  ngOnInit() {
    if (this.platformService.isBrowser()) {
      this.link = location.href;
    }
  }

}
