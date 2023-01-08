import { Component, OnInit , Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnInit , OnChanges {

  @Input() title:string = '';
  @Input() description:string = '';
  @Input('used') value : number;
  @Input('available') max : number ;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.value && isNaN(changes.value.currentValue)) this.value = 0 ; 
    if(changes.max && isNaN(changes.max.currentValue)) this.max = 100 ; 
  }


  isDanger(){
    return this.value / this.max > 0.7;
  }

}