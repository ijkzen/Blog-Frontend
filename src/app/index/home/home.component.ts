import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeveloperService} from '../../service/developer.service';
import {LinkService} from '../../service/link.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private developerService: DeveloperService,
    private router: Router,
    private linkService: LinkService
  ) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        params => {
          console.log(params.nodeId);
          if (params.nodeId) {
            this.developerService.getDeveloperInfo()
              .subscribe(
                (result) => {
                  localStorage.setItem('developerName', result.developer.login);
                  localStorage.setItem('developerId', '' + result.developer.id);
                  localStorage.setItem('nodeId', result.developer.node_id);
                  localStorage.setItem('avatarUrl', result.developer.avatar_url);
                  localStorage.setItem('htmlUrl', result.developer.html_url);
                  localStorage.setItem('Authorization', result.developer.node_id);
                  location.replace(this.linkService.getFrontendUrl());
                }
              );
          }
        }
      );
  }
}
