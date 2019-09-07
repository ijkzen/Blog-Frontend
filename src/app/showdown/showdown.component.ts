import {Component, ElementRef, Input, OnChanges, OnInit} from '@angular/core';
import {MermaidService} from '../mermaid.service';
import * as Showdown from 'showdown';
import * as highLight from 'showdown-highlight';
import * as math from './MathExtension';
import * as mermaidLabel from './MermaidExtension';

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
      extensions: [
        mermaidLabel,
        highLight,
        math
      ]
    }
  );

  constructor(
    private elementRef: ElementRef,
    private mermaidService: MermaidService
  ) {
    this.showdown.setFlavor('github');
  }

  ngOnInit() {
    if (this.md !== undefined) {
      this.render();
    }
  }

  ngOnChanges(): void {
    this.render();
    this.mermaidService.renderMermaid(this.elementRef.nativeElement);
  }

  render(): void {
    this.elementRef.nativeElement.innerHTML = this.showdown.makeHtml(this.md);
  }

}
