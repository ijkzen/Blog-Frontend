import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {NzButtonModule, NzIconModule, NzLayoutModule, NzMenuModule} from 'ng-zorro-antd';
import {IndexComponent} from './index/index.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleModule} from '../article/article.module';


@NgModule({
  declarations: [HeaderComponent, IndexComponent, HomeComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
    RouterModule,
    ArticleModule
  ]
})
export class IndexModule {
}
