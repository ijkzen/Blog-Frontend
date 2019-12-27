import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleItemComponent} from './article-item/article-item.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleInfoComponent} from './article-info/article-info.component';
import {NextShowdownModule} from 'next-showdown';
import {
  NzAvatarModule,
  NzBackTopModule,
  NzButtonModule,
  NzCommentModule,
  NzDividerModule,
  NzFormModule,
  NzIconModule,
  NzInputModule,
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
import {CommentComponent} from './comment/comment.component';
import {EditCommentComponent} from './edit-comment/edit-comment.component';
import {FormsModule} from '@angular/forms';
import {EditComponent} from './edit/edit.component';
import {ContributorsComponent} from './contributors/contributors.component';
import {ArticleNavigationComponent} from './article-navigation/article-navigation.component';

@NgModule({
  declarations: [
    ArticleItemComponent,
    ArticleListComponent,
    ArticleInfoComponent,
    BackTopComponent,
    OutlineComponent,
    DownloadComponent,
    CopyrightComponent,
    CommonListComponent,
    CommentComponent,
    EditCommentComponent,
    EditComponent,
    ContributorsComponent,
    ArticleNavigationComponent
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
    NzCommentModule,
    NzAvatarModule,
    NzFormModule,
    FormsModule,
    NzInputModule,
  ]
})
export class ArticleModule {
}
