import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../service/bean/data/Article';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  @Input()
  article: Article;

  link: string;

  constructor() {
  }

  ngOnInit() {
    this.link = location.href;
  }

}
