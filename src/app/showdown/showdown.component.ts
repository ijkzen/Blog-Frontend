import {Component, ElementRef, Input, OnChanges, OnInit} from '@angular/core';
import * as Showdown from 'showdown';
import * as highLight from 'showdown-highlight';


@Component({
  selector: 'app-showdown',
  templateUrl: './showdown.component.html',
  styleUrls: ['./showdown.component.scss']
})
export class ShowdownComponent implements OnInit, OnChanges {
  @Input()
  md: string;

  showdown = new Showdown.Converter(
    {
      extensions: [highLight]
    }
  );

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    if (this.md !== undefined) {
      this.render();
    }
  }

  ngOnChanges(): void {
    this.render();
    console.error('changes invoked');
  }

  render(): void {
    this.elementRef.nativeElement.innerHTML = this.showdown.makeHtml(this.md);
  }

}
