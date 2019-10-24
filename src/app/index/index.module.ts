import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {NzButtonModule, NzGridModule, NzIconModule, NzLayoutModule, NzMenuModule} from 'ng-zorro-antd';
import {IndexComponent} from './index/index.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleModule} from '../article/article.module';
import {CategoryComponent} from './category/category.component';
import {CategoryArticlesComponent} from './category-articles/category-articles.component';


@NgModule({
  declarations: [HeaderComponent, IndexComponent, HomeComponent, CategoryComponent, CategoryArticlesComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
    RouterModule,
    ArticleModule,
    NzGridModule
  ]
})
export class IndexModule {
}
