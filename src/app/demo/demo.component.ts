import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import HtmlUtil from '../../../projects/next-showdown/src/lib/Util/HtmlUtil';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  value: string;

  loading = true;

  @ViewChild('preview', {static: true})
  preview;

  html = new HtmlUtil();

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.http.get('../../assets/demo.md', {responseType: 'text'})
      .subscribe(
        (rsp) => {
          this.value = rsp;
          this.preview.nativeElement.innerHTML = this.html.getHtml(this.value);
        }
      );
  }

  deleteText() {
    this.value = '';
  }

  cancelLoading(result: boolean) {
    this.loading = result;
  }

}
