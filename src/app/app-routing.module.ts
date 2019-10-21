import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index/index.component';
import {HomeComponent} from './index/home/home.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    children: [
      {path: '', component: HomeComponent},
    ]
  },
  {path: '', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
