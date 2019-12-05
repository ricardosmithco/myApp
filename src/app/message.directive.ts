import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[appMessage]'
})
export class MessageDirective {

  @Input('appMessage') message: string;

  constructor(private el: ElementRef, private renderer: Renderer2){
    renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
   }

   @HostListener('click') onClick(){
     this.el.nativeElement.innerHTML = this.message;
     this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
   }

}
