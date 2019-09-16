import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MermaidService} from 'next-mermaid';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {

  @ViewChild('markdown', {static: true})
  markdown;

  value: string;

  loading = true;

  worker: Worker;

  backup: string;

  interval;

  constructor(
    private http: HttpClient,
    private mermaidService: MermaidService
  ) {
    this.worker = new Worker('../markdown.worker', {type: 'module'});
    this.worker.onmessage = ({data}) => {
      this.markdown.nativeElement.innerHTML = data;
      this.mermaidService.renderMermaid(this.markdown.nativeElement);
      if (this.loading) {
        this.loading = false;
      }
    };
  }

  ngOnInit() {
    this.http.get('../../assets/demo.md', {responseType: 'text'})
      .subscribe(
        (rsp) => {
          this.value = rsp;
          this.worker.postMessage(this.value);
        }
      );
    this.startTimer();
  }

  deleteText() {
    this.value = '';
  }

  startTimer() {
    this.interval = setInterval(
      () => {
        if (this.backup !== this.value) {
          this.worker.postMessage(this.value);
          this.backup = this.value;
        }
      },
      1500
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
