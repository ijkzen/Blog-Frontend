import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index/index.component';
import {HomeComponent} from './index/home/home.component';
import {ArticleInfoComponent} from './article/article-info/article-info.component';
import {CategoryComponent} from './index/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'article/:id', component: ArticleInfoComponent}
    ]
  },
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
