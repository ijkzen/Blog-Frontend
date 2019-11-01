import {Component, OnInit} from '@angular/core';
import {AboutService} from '../../service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: string;

  constructor(
    private aboutService: AboutService
  ) {
  }

  ngOnInit() {
    this.aboutService.getAbout()
      .subscribe(
        result => {
          this.about = result.about;
        }
      );
  }

}
