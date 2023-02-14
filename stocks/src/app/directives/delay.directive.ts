import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective {

  @Input() set delay(ms:number) {
    setTimeout(()=>{
      this.vc.createEmbeddedView(this.tr);
    },ms);
  }
  constructor(private tr : TemplateRef<any> , private vc:ViewContainerRef) { }

}
