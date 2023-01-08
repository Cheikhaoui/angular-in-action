import {Component, Input, OnInit} from '@angular/core';
import {StockInterface} from "../../services/stocks.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() stock:StockInterface;

  constructor() { }
  ngOnInit(): void {
  }

  isPositive(){
    return this.stock?.change>0;
  }

  isNegative(){
    return this.stock?.change<0;
  }

}
