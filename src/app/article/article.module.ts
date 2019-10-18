import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleItemComponent} from './article-item/article-item.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleInfoComponent} from './article-info/article-info.component';
import {NextShowdownModule} from 'next-showdown';
import {NzDividerModule, NzSkeletonModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ArticleItemComponent,
    ArticleListComponent,
    ArticleInfoComponent
  ],
  imports: [
    CommonModule,
    NextShowdownModule,
    NzDividerModule,
    RouterModule,
    NzSkeletonModule
  ]
})
export class ArticleModule {
}
