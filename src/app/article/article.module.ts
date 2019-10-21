import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleItemComponent} from './article-item/article-item.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleInfoComponent} from './article-info/article-info.component';
import {NextShowdownModule} from 'next-showdown';
import {NzBackTopModule, NzDividerModule, NzPaginationModule, NzSkeletonModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {ArticleRoutingModule} from './article-routing.module';
import {BackTopComponent} from './back-top/back-top.component';

@NgModule({
  declarations: [
    ArticleItemComponent,
    ArticleListComponent,
    ArticleInfoComponent,
    BackTopComponent
  ],
  exports: [
    ArticleListComponent,
    ArticleRoutingModule
  ],
  imports: [
    CommonModule,
    NextShowdownModule,
    NzDividerModule,
    RouterModule,
    NzSkeletonModule,
    ArticleRoutingModule,
    NzPaginationModule,
    NzBackTopModule
  ]
})
export class ArticleModule {
}
