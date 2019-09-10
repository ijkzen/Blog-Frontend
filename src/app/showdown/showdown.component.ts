import {Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {MermaidService} from '../mermaid.service';


@Component({
  selector: 'app-showdown',
  templateUrl: './showdown.component.html',
  styleUrls: ['./showdown.component.scss']
})
export class ShowdownComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  md: string;

  @Output()
  rendering = new EventEmitter<boolean>();

  markTime = 0;

  duringTime = 1200;

  interval;

  backup: string;

  worker: Worker;

  count = 0;

  constructor(
    private elementRef: ElementRef,
    private mermaidService: MermaidService
  ) {
    this.worker = new Worker('../showdown.worker', {type: 'module'});
    this.worker.onmessage = ({data}) => {
      this.elementRef.nativeElement.innerHTML = data;
      this.mermaidService.renderMermaid(this.elementRef.nativeElement);
      if (data !== '' && data !== null && data !== undefined) {
        this.renderedView();
      }
    };
  }

  ngOnInit() {
    if (this.md !== undefined) {
      this.worker.postMessage(this.md);
      this.count = 1;
    }
    this.startTimer();
  }

  ngOnChanges(): void {
    this.markTime = new Date().getTime();
    if (this.count === 1) {
      this.worker.postMessage(this.md);
      this.count = 0;
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
        const currentTime = new Date().getTime();
        if (currentTime - this.markTime >= this.duringTime) {
          if (this.md !== this.backup) {
            this.worker.postMessage(this.md);
            this.backup = this.md;
          }
        }
      },
      800);
  }

  destroyTimer() {
    clearInterval(this.interval);
  }

  ngOnDestroy(): void {
    this.destroyTimer();
  }

  renderedView() {
    this.rendering.emit(false);
  }

}
