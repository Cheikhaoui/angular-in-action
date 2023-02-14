import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[cardType]'
})
export class CardTypeDirective implements OnInit{

  @Input() increaseClass:string = 'increase'
  @Input() cardType : number = 0;
  @Input() decreaseClass:string = 'decrease'


  constructor(private el : ElementRef) { }

  ngOnInit(): void {
    if(this.cardType){
      if(this.cardType >= 0 ){
        this.el.nativeElement.classList.add(this.increaseClass);
        this.el.nativeElement.classList.remove(this.decreaseClass);
      }else{
        this.el.nativeElement.classList.remove(this.increaseClass);
        this.el.nativeElement.classList.add(this.decreaseClass);
      }
    }  
  }

}
