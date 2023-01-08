import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let serviceUrl: string = "http://localhost:3000/stocks/snapshot";

export interface StockInterface {
  symbol: string,
  lastTradePriceOnly: number,
  change: number,
  changeInPercent: number
}

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http:HttpClient) {
  }

  get(){
    return stocks.slice();
  }

  add(stock:string){
    stocks.push(stock);
    return this.get();
  }

  remove(stock:string){
    stocks.splice(stocks.indexOf(stock),1);
    return this.get();
  }

  load(symbols:Array<string>){
    if(symbols){
     return  this.http.get<StockInterface[]>(serviceUrl+"?symbols="+symbols.join())
    }
  }

}
