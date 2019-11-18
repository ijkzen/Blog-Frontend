import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-beian',
  templateUrl: './beian.component.html',
  styleUrls: ['./beian.component.scss']
})
export class BeianComponent implements OnInit {

  constructor(
    private storageService: StorageService
  ) {
  }

  ngOnInit() {
  }
}
