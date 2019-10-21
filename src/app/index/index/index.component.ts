import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  clickItem(text: string) {
    console.error(text);
    switch (text) {
      case 'Home':
        this.toHome();
        break;
      case 'category':
        this.toCategory();
        break;
      case 'about':
        this.toAbout();
        break;
      case 'game':
        this.toGame();
        break;
      case 'search':
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
