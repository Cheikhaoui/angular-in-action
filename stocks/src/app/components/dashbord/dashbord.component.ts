import { Component, OnInit } from '@angular/core';
import {StockInterface, StocksService} from "../../services/stocks.service";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  stocks :Array<StockInterface> ;
  symbols : Array<string>;
  constructor(private stocksService : StocksService) {
    this.symbols = stocksService.get();
  }
  ngOnInit(): void {
    this.stocksService.load(this.symbols)?.subscribe((data) => {
      this.stocks = data;
    })
  }
}
