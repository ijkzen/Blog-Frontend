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
        }
      );

    this.startTimer();
  }

  startTimer() {
    this.internal = setInterval(() => {
        this.value = this.editor.nativeElement.value;
        this.loading = false;
      },
      1000
    );
  }

  destroyTimer() {
    clearInterval(this.internal);
  }

  ngOnDestroy(): void {
    this.destroyTimer();
  }

}
