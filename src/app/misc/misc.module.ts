import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {NzButtonModule, NzResultModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NzResultModule,
    NzButtonModule
  ]
})
export class MiscModule {
}
