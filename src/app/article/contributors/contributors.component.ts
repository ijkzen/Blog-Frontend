import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit, OnChanges {

  @Input()
  contributors: string;

  items: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.contributors !== null) {
      this.items = this.contributors.split(',');
    }
  }

}
