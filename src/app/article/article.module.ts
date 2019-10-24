import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleItemComponent} from './article-item/article-item.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleInfoComponent} from './article-info/article-info.component';
import {NextShowdownModule} from 'next-showdown';
import {
  NzBackTopModule,
  NzButtonModule,
  NzDividerModule,
  NzIconModule,
  NzModalModule,
  NzPaginationModule,
  NzSkeletonModule
} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {ArticleRoutingModule} from './article-routing.module';
import {BackTopComponent} from './back-top/back-top.component';
import {OutlineComponent} from './outline/outline.component';
import {DownloadComponent} from './download/download.component';
import {CopyrightComponent} from './copyright/copyright.component';
import {CommonListComponent} from './common-list/common-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ArticleItemComponent,
    ArticleListComponent,
    ArticleInfoComponent,
    BackTopComponent,
    OutlineComponent,
    DownloadComponent,
    CopyrightComponent,
    CommonListComponent
  ],
  exports: [
    ArticleListComponent,
    ArticleRoutingModule,
    CommonListComponent
  ],
  imports: [
    CommonModule,
    NextShowdownModule,
    NzDividerModule,
    RouterModule,
    NzSkeletonModule,
    ArticleRoutingModule,
    NzPaginationModule,
    NzBackTopModule,
    NzIconModule,
    NzButtonModule,
    NzModalModule,
    BrowserAnimationsModule
  ]
})
export class ArticleModule {
}
