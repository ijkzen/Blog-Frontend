import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditArticleComponent} from './edit-article/edit-article.component';
import {FormsModule} from '@angular/forms';
import {NzInputModule, NzSkeletonModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzSkeletonModule,
    NzInputModule
  ]
})
export class EditModule {
}
