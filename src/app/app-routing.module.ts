import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleListComponent} from './article/article-list/article-list.component';
import {ArticleInfoComponent} from './article/article-info/article-info.component';

const routes: Routes = [
  {path: '', component: ArticleListComponent},
  {path: 'article/:id', component: ArticleInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
