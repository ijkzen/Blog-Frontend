import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IndexService} from '../../service/index.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit, AfterViewInit {

  count: number;

  constructor(
    private indexService: IndexService
  ) {
  }

  ngOnInit() {
    this.indexService.view()
      .subscribe(
        result => {
          this.count = result.count;
        }
      );
  }

  ngAfterViewInit(): void {
    this.indexService.count()
      .subscribe(
        result => {
        }
      );
  }


}
