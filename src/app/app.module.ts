import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DemoComponent} from './demo/demo.component';
import {FormsModule} from '@angular/forms';

import {HtmlService, MermaidService, NextShowdownModule} from 'next-showdown';
import HtmlUtil from 'next-showdown/lib/Util/HtmlUtil';
import {NzButtonModule, NzIconModule, NzInputModule, NzSkeletonModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NzSkeletonModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NextShowdownModule
  ],
  providers: [HtmlService, MermaidService, HtmlUtil],
  bootstrap: [AppComponent]
})
export class AppModule {
}
