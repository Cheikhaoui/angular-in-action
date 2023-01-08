import { Component, OnInit } from '@angular/core';
import {StocksService} from "../../services/stocks.service";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  symbols : Array<string>;
  stock : string;

  constructor(private stocksService:StocksService) {
    this.symbols = stocksService.get();
  }

  add(){
    this.symbols = this.stocksService.add(this.stock.toUpperCase());
    this.stock ='';
  }

  remove(symbol:string){
    this.symbols = this.stocksService.remove(symbol)
  }
  ngOnInit(): void {
  }

}
