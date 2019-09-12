import {NgModule} from '@angular/core';
import {ShowdownComponent} from './showdown/showdown.component';
import {MermaidService} from 'next-mermaid';

@NgModule({
  declarations: [ShowdownComponent],
  imports: [],
  exports: [
    ShowdownComponent,
  ],
  providers: [MermaidService]
})
export class NextShowdownModule {
}
