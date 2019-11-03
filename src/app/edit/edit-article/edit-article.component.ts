import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MermaidService} from 'next-mermaid';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../service/bean/data/Article';
import {ArticleService} from '../../service/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit, OnDestroy {

  @ViewChild('markdown', {static: false})
  markdown;

  loading = true;

  worker: Worker;

  backup: string;

  interval;

  articleId: number;

  content = '';

  article: Article;

  constructor(
    private http: HttpClient,
    private mermaidService: MermaidService,
    private route: ActivatedRoute,
    private articleService: ArticleService
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
    this.route.params.subscribe(
      param => {
        this.articleId = param.id;
        this.articleService.getArticleById(this.articleId)
          .subscribe(
            result => {
              if (result.errCode === '000') {
                this.article = result.article;
                this.content = this.article.content;
                this.worker.postMessage(this.article.content);
              }
            }
          );
      }
    );
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
  }

}
