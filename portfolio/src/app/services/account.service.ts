import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { LocalStorageService } from './local-storage.service';
import { Stock } from './stocks.model';

const defaultBalance: number = 10000;
@Injectable()
export class AccountService {

    private _balance: number;
    private _cost: number ;
    private _value: number = 0;
    private _stocks: Stock[];

    constructor (private localStorage:LocalStorageService , private alertService:AlertService){}

    get balance(): number { return this._balance }
    get cost(): number { return this._cost }
    get value(): number { return this._value }
    get stocks(): Stock[] { return this._stocks }

    purshase(stock: Stock) {
        stock = Object.assign({}, stock);
        if (stock.price < this.balance) {
            this._balance = this.debit(stock.price, this.balance)
            stock.cost = stock.price;
            this._cost = this.credit(stock.cost, this.cost)
            stock.change = 0;
            this.stocks.push(stock);
            this.calculateValue();
            this.alertService.alert(`you bought ${stock.symbol} for ${stock.price}` ,'success');

        }
        this.cachValues();
    }

    sell(index: number) {
        let stock = this.stocks[index]
        if (stock) {
            this._balance = this.credit(stock.price, this.balance)
            this._cost = this.debit(stock.cost, stock.cost);
            this._stocks.splice(1, index);
            this.calculateValue();
            this.alertService.alert(`you sold ${stock.symbol} for ${stock.price}` ,'success');

        }

        this.cachValues();
    }

    calculateValue() {
        this._value = this.stocks.map(s => s.price).reduce((a, b) => a + b, 0);
    }
    private debit(amount: number, balance: number): number {
        return (balance * 100 - amount * 100) / 100;
    }

    private credit(amount: number, balance: number): number {
        return (balance * 100 + amount * 100) / 100;
    }

    reset() {
        this._stocks = [];
        this._balance = defaultBalance;
        this._value = this._cost = 0;
        this.cachValues();  
    }

    cachValues(){
        this.localStorage.set('stocks',this.stocks)
        this.localStorage.set('balance',this.balance)
        this.localStorage.set('cost',this.cost) 
    }

    init(){
        this._stocks = this.localStorage.get('stocks',[])
        this._balance = this.localStorage.get('balance',defaultBalance)
        this._cost = this.localStorage.get('cost',0)
     }

}
