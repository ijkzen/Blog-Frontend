import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './misc/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(mod => mod.IndexModule)
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
