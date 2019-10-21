import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleInfoComponent} from './article-info/article-info.component';
import {ArticleListComponent} from './article-list/article-list.component';

const routes: Routes = [
  {path: 'article/:id', component: ArticleInfoComponent},
  {path: 'articles', component: ArticleListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(
    routes,
  )],
  exports: [RouterModule]
})
export class ArticleRoutingModule {
}
