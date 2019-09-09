import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {
  @ViewChild('editor', {static: false})
  editor;

  value: string;

  internal;

  loading = true;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.http.get('../../assets/demo.md', {responseType: 'text'})
      .subscribe(
        (rsp) => {
          this.editor.nativeElement.value = rsp;
          this.value = rsp;
          this.loading = false;
        }
      );

    this.startTimer();
  }

  startTimer() {
    this.internal = setInterval(() => {
        this.value = this.editor.nativeElement.value;
      },
      1000 * 10
    );
  }

  destroyTimer() {
    clearInterval(this.internal);
  }

  deleteText() {
    this.editor.nativeElement.value = '';
  }

  ngOnDestroy(): void {
    this.destroyTimer();
  }

}
