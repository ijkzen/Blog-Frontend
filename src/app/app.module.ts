import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';

import {HtmlService, NextShowdownModule} from 'next-showdown';
import {MermaidService} from 'next-mermaid';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzButtonModule, NzIconModule, NzInputModule, NzSkeletonModule} from 'ng-zorro-antd';
import {HttpsInterceptor} from './client-interceptor';
import {ArticleModule} from './article/article.module';
import {IndexModule} from './index/index.module';
import {ChatModule} from './chat/chat.module';
import {MiscModule} from './misc/misc.module';
import {EditModule} from './edit/edit.module';
import {EditArticleComponent} from './edit/edit-article/edit-article.component';
import {CompareTextComponent} from './edit/compare-text/compare-text.component';
import {CompareViewComponent} from './edit/compare-view/compare-view.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
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
    AppRoutingModule,
  ],
  providers: [
    HtmlService,
    MermaidService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditArticleComponent,
    CompareTextComponent,
    CompareViewComponent
  ]
})
export class AppModule {
}
