import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../service/bean/data/Article';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  @Input()
  article: Article;

  constructor() {
  }

  ngOnInit() {
  }

  download() {
    const aLink = document.createElement('a');
    const blob = new Blob([this.article.content], {
      type: 'text/plain'
    });
    const evt = new Event('click');
    aLink.download = this.article.fileName;
    aLink.href = URL.createObjectURL(blob);
    aLink.click();
    URL.revokeObjectURL(aLink.href);
  }

}
