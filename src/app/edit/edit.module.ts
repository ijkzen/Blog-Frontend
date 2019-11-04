import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditArticleComponent} from './edit-article/edit-article.component';
import {FormsModule} from '@angular/forms';
import {NzButtonModule, NzIconModule, NzInputModule, NzSkeletonModule, NzStepsModule} from 'ng-zorro-antd';
import {EditArticleDirective} from './edit-article.directive';
import {EditOutlineComponent} from './edit-outline/edit-outline.component';
import {EditRoutingModule} from './edit-routing.module';
import {CompareTextComponent} from './compare-text/compare-text.component';


@NgModule({
  declarations: [
    EditArticleComponent,
    EditArticleDirective,
    EditOutlineComponent,
    CompareTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzSkeletonModule,
    NzInputModule,
    NzStepsModule,
    EditRoutingModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class EditModule {
}
