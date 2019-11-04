import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appEditArticleDirective]'
})
export class EditArticleDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) {
  }

}
