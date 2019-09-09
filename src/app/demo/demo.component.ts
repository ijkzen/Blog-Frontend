import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  value: string;

  loading = true;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.http.get('../../assets/demo.md', {responseType: 'text'})
      .subscribe(
        (rsp) => {
          this.value = rsp;
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
