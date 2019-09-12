import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MermaidService} from 'next-mermaid';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  @ViewChild('markdown', {static: true})
  markdown;

  value: string;

  loading = true;

  worker: Worker;

  constructor(
    private http: HttpClient,
    private mermaidService: MermaidService
  ) {
    this.worker = new Worker('../markdown.worker', {type: 'module'});
    this.worker.onmessage = ({data}) => {
      this.markdown.nativeElement.innerHTML = data;
      this.mermaidService.renderMermaid(this.markdown.nativeElement);
      this.loading = false;
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
  }

  deleteText() {
    this.value = '';
  }

}
