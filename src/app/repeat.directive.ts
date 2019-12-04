import { Directive, TemplateRef,ViewContainerRef, Input } from '@angular/core';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  constructor(private _templateRef: TemplateRef<any>, private _viewContainer: ViewContainerRef) {}

  @Input() set appRepeat(count: number){
    for(var i = 0; i < count; i++){
      this._viewContainer.createEmbeddedView(this._templateRef);
    }
  }

}
