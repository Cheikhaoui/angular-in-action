import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { AccountService } from './account.service';
import { ConfigService } from './config.service';
import { Stock } from './stocks.model';

@Injectable()
export class InterceptorService implements HttpInterceptor{

  constructor(private accountService:AccountService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone();
    request.headers.append('accept','application/json');
    return next.handle(request).do(event=>{
      if(event instanceof HttpResponse && event.url === ConfigService.get('api')){
       let stocks = event.body as Array<Stock>;
    stocks.forEach(stock=>{
       this.accountService.stocks.map(item=>{
        if(item.symbol == stock.symbol){
          item.price = stock.price;
          item.change = ((stock.price * 100 ) - (item.price * 100))/100;
        }
       })
      })
      this.accountService.calculateValue();
      return stocks;
    }
  })
  }

}