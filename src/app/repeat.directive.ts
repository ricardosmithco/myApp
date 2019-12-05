import { Directive, TemplateRef,ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
  exportAs: 'repeat,changeText'
})
export class RepeatDirective {

  constructor(private _templateRef: TemplateRef<any>, private _viewContainer: ViewContainerRef) {}

  repeatElement(count: number){
    for(let i = 0; i < count; i++){
      this._viewContainer.createEmbeddedView(this._templateRef);
    }
  }

  changeElementText(count: number){
    for(let i=0; i<5; i++){
      document.getElementsByTagName('p').item(i).innerHTML = 'Text is changed ...';
    }
  }

}
