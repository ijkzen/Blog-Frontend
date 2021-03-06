import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeveloperService} from '../../service/developer.service';
import {LinkService} from '../../service/link.service';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private developerService: DeveloperService,
    private router: Router,
    private linkService: LinkService,
    private storageService: StorageService
  ) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        params => {
          if (params.nodeId) {
            this.storageService.setAuthorization(params.nodeId);
            this.developerService.getDeveloperInfo()
              .subscribe(
                (result) => {
                  this.storageService.setDeveloperName(result.developer.login);
                  this.storageService.setDeveloperId(result.developer.id);
                  this.storageService.setAvatarUrl(result.developer.avatar_url);
                  this.storageService.setDeveloperHtml(result.developer.html_url);
                  location.replace(this.linkService.getFrontendUrl());
                }
              );
          }
        }
      );

    document.title = 'IJKZEN';
  }
}
