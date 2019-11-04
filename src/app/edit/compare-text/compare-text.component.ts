import {Component, Input, OnInit} from '@angular/core';
import {EditArticleInterface} from '../EditArticleInterface';
import {Article} from '../../service/bean/data/Article';

@Component({
  selector: 'app-compare-text',
  templateUrl: './compare-text.component.html',
  styleUrls: ['./compare-text.component.scss']
})
export class CompareTextComponent implements OnInit, EditArticleInterface {

  @Input()
  changed: Article;

  @Input()
  origin: Article;

  constructor() {
  }

  ngOnInit() {
    jQuery(document).ready(() => {
      jQuery('#mergely').mergely({
        lhs: (setValue) => {
          setValue(this.origin.content);
        },
        rhs: (setValue) => {
          setValue(this.changed.content);
        },
        cmsettings: {mode: 'text/plain', readOnly: true}
      });
    });
  }

}
