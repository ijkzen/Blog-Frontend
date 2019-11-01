import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DemoComponent} from './demo/demo.component';
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

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
  ],
  providers: [
    HtmlService,
    MermaidService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
