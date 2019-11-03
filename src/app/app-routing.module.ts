import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './misc/not-found/not-found.component';
import {EditArticleComponent} from './edit/edit-article/edit-article.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(mod => mod.IndexModule)
  },
  {path: 'edit/:id', component: EditArticleComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
