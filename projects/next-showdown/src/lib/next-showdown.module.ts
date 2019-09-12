import {NgModule} from '@angular/core';
import {ShowdownComponent} from './showdown/showdown.component';
import HtmlUtil from './Util/HtmlUtil';

@NgModule({
  declarations: [ShowdownComponent],
  imports: [],
  exports: [
    ShowdownComponent,
    HtmlUtil,
  ]
})
export class NextShowdownModule {
}
