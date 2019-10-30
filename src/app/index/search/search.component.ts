import {Component, OnInit} from '@angular/core';
import {Article} from '../../service/bean/data/Article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  data: Article[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
