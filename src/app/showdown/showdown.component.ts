import {Component, ElementRef, Input, OnChanges, OnInit} from '@angular/core';
import {MermaidService} from '../mermaid.service';


@Component({
  selector: 'app-showdown',
  templateUrl: './showdown.component.html',
  styleUrls: ['./showdown.component.scss']
})
export class ShowdownComponent implements OnInit, OnChanges {
  @Input()
  md: string;

  backup: string;

  worker: Worker;

  constructor(
    private elementRef: ElementRef,
    private mermaidService: MermaidService
  ) {
    this.worker = new Worker('../showdown.worker', {type: 'module'});
    this.worker.onmessage = ({data}) => {
      this.elementRef.nativeElement.innerHTML = data;
      this.mermaidService.renderMermaid(this.elementRef.nativeElement);
    };
  }

  ngOnInit() {
    if (this.md !== undefined) {
      this.worker.postMessage(this.md);
      this.backup = this.md;
    }
  }

  ngOnChanges(): void {
    if (this.md !== this.backup) {
      this.worker.postMessage(this.md);
      this.backup = this.md;
    }
  }

}
