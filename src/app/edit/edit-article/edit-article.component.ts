import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MermaidService} from 'next-mermaid';
import {Article} from '../../service/bean/data/Article';
import {EditArticleInterface} from '../EditArticleInterface';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit, OnDestroy, EditArticleInterface, AfterViewInit {

  @ViewChild('markdown', {static: false})
  markdown;

  loading = true;

  worker: Worker;

  backup: string;

  interval;

  content = '';

  @Input()
  origin: Article;

  changed: Article;

  constructor(
    private http: HttpClient,
    private mermaidService: MermaidService,
  ) {
    this.worker = new Worker('../../markdown.worker', {type: 'module'});
    this.worker.onmessage = ({data}) => {
      this.markdown.nativeElement.innerHTML = data;
      this.mermaidService.renderMermaid(this.markdown.nativeElement);
      if (this.loading) {
        this.loading = false;
      }
    };
  }

  ngOnInit() {
    if (this.origin) {
      this.content = this.origin.content;
      this.worker.postMessage(this.origin.content);
    }
    this.startTimer();
  }


  startTimer() {
    this.interval = setInterval(
      () => {
        if (this.backup !== this.content) {
          this.worker.postMessage(this.content);
          this.backup = this.content;
        }
      },
      1500
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    localStorage.setItem('origin', JSON.stringify(this.origin));
    this.changed = this.origin;
    this.changed.content = this.content;
    localStorage.setItem('changed', JSON.stringify(this.changed));
  }

  ngAfterViewInit(): void {
    this.content = this.origin.content;
  }

}
