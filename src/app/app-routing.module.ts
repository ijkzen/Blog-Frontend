import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index/index.component';
import {HomeComponent} from './index/home/home.component';
import {ArticleInfoComponent} from './article/article-info/article-info.component';
import {CategoryComponent} from './index/category/category.component';
import {CategoryArticlesComponent} from './index/category-articles/category-articles.component';
import {GameComponent} from './index/game/game.component';
import {ChatRoomComponent} from './chat/chat-room/chat-room.component';
import {SearchComponent} from './index/search/search.component';
import {AboutComponent} from './index/about/about.component';
import {NotFoundComponent} from './misc/not-found/not-found.component';

const routes: Routes = [
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
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: true,
      anchorScrolling: 'enabled',
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
