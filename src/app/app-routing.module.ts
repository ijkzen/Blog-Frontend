import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleInfoComponent} from './article/article-info/article-info.component';
import {IndexComponent} from './index/index/index.component';
import {HomeComponent} from './index/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {
    path: 'index',
    component: IndexComponent,
    children: [
      {path: '', component: HomeComponent, outlet: 'content'},
      {path: 'home', component: HomeComponent, outlet: 'content'},
      {
        path: 'article/:id',
        component: ArticleInfoComponent,
        outlet: 'content'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
