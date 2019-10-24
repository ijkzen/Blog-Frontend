import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../service/bean/data/Article';

@Component({
  selector: 'app-common-list',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.scss']
})
export class CommonListComponent implements OnInit {

  @Input()
  list: Article[] = new Array(15).fill({}).map((i, index) => {
    return {
      id: null,
      fileName: null,
      author: null,
      shown: null,
      deleted: null,
      title: '',
      category: '',
      visits: 0,
      commentId: 0,
      createdTime: null,
      updatedTime: null,
      content: null,
      abstract: null
    };
  });

  @Input()
  loading;

  constructor() {
  }

  ngOnInit() {
  }

}
