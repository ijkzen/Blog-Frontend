import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeveloperService} from '../../service/developer.service';
import {LinkService} from '../../service/link.service';

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
    private linkService: LinkService
  ) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        params => {
          console.log(params.nodeId);
          if (params.nodeId) {
            localStorage.setItem('Authorization', params.nodeId);
            this.developerService.getDeveloperInfo()
              .subscribe(
                (result) => {
                  localStorage.setItem('developerName', result.developer.login);
                  localStorage.setItem('developerId', '' + result.developer.id);
                  localStorage.setItem('avatarUrl', result.developer.avatar_url);
                  localStorage.setItem('htmlUrl', result.developer.html_url);
                  location.replace(this.linkService.getFrontendUrl());
                }
              );
          }
        }
      );
  }

  clickItem(text: string) {
    console.error(text);
    switch (text) {
      case 'Home':
        this.toHome();
        break;
      case 'Category':
        this.toCategory();
        break;
      case 'about':
        this.toAbout();
        break;
      case 'Game':
        this.toGame();
        break;
      case 'Search':
        this.toSearch();
        break;
      default:
        break;
    }
  }

  toHome() {
    this.router.navigateByUrl('home');
  }

  toCategory() {
    this.router.navigateByUrl('category');
  }

  toAbout() {
    this.router.navigateByUrl('about');
  }

  toGame() {
    this.router.navigateByUrl('game');
  }

  toSearch() {
    this.router.navigateByUrl('search');
  }
}
