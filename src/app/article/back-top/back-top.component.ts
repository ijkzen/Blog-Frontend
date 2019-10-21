import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.scss']
})
export class BackTopComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  toTop() {
    document.getElementById('article').scrollTop = 0;
  }
}
