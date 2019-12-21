import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';

import {HtmlService, NextShowdownModule} from 'next-showdown';
import {MermaidService} from 'next-mermaid';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzButtonModule, NzInputModule, NzSkeletonModule} from 'ng-zorro-antd';
import {HttpsInterceptor} from './client-interceptor';
import {ArticleModule} from './article/article.module';
import {IndexModule} from './index/index.module';
import {ChatModule} from './chat/chat.module';
import {MiscModule} from './misc/misc.module';
import {EditModule} from './edit/edit.module';
import {EditArticleComponent} from './edit/edit-article/edit-article.component';
import {CompareTextComponent} from './edit/compare-text/compare-text.component';
import {CompareViewComponent} from './edit/compare-view/compare-view.component';
import {AdminModule} from './admin/admin.module';
import {OnlyCompareTextComponent} from './admin/only-compare-text/only-compare-text.component';
import {OnlyCompareViewComponent} from './admin/only-compare-view/only-compare-view.component';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';
import {
  AlipayOutline,
  AppstoreOutline,
  ArrowLeftOutline,
  ArrowRightOutline,
  ArrowUpOutline,
  CalendarOutline,
  DownloadOutline,
  EditOutline,
  FolderOutline,
  HomeOutline,
  PlayCircleOutline,
  SearchOutline,
  SmileOutline,
  UploadOutline,
  UserOutline,
  WechatOutline
} from '@ant-design/icons-angular/icons';
import {IconDefinition} from '@ant-design/icons-angular';


const icons: IconDefinition[] = [
  UploadOutline,
  CalendarOutline,
  UserOutline,
  FolderOutline,
  AlipayOutline,
  WechatOutline,
  ArrowUpOutline,
  DownloadOutline,
  EditOutline,
  ArrowRightOutline,
  ArrowLeftOutline,
  HomeOutline,
  AppstoreOutline,
  SmileOutline,
  PlayCircleOutline,
  SearchOutline
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NzSkeletonModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NextShowdownModule,
    ArticleModule,
    IndexModule,
    ChatModule,
    MiscModule,
    EditModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [
    HtmlService,
    MermaidService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true},
    {provide: NZ_ICONS, useValue: icons}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditArticleComponent,
    CompareTextComponent,
    CompareViewComponent,
    OnlyCompareTextComponent,
    OnlyCompareViewComponent
  ]
})
export class AppModule {
}
