import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {HomeComponent} from './home/home.component';
import {CategoryComponent} from './category/category.component';
import {AboutComponent} from './about/about.component';
import {GameComponent} from './game/game.component';
import {SearchComponent} from './search/search.component';
import {ChatRoomComponent} from '../chat/chat-room/chat-room.component';
import {ArticleInfoComponent} from '../article/article-info/article-info.component';
import {CategoryArticlesComponent} from './category-articles/category-articles.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'about', component: AboutComponent},
      {path: 'game', component: GameComponent},
      {path: 'search', component: SearchComponent},
      {path: 'xiaoice', component: ChatRoomComponent},
      {path: 'article/:id', component: ArticleInfoComponent},
      {path: 'category/:category', component: CategoryArticlesComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IndexRoutingModule {
}
