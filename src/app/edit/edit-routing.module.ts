import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {EditOutlineComponent} from './edit-outline/edit-outline.component';

const editRoutes: Routes = [
  {
    path: 'edit/:id',
    component: EditOutlineComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(editRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EditRoutingModule {
}
