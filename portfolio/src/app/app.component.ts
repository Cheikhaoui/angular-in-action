import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from './services/account.service';
import { AlertService } from './services/alert.service';
import { Stock } from './services/stocks.model';
import { StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StocksService]
})
export class AppComponent implements OnInit, OnDestroy {

  refresh: boolean = true;
  stocks: Stock[] = [];
  interval: any;

  constructor(private accountService: AccountService, private stockService: StocksService, private alertService:AlertService  ) { }

  ngOnInit(): void {
    this.accountService.init();
    this.load();
    this.interval = setInterval(() => {
      if (this.refresh) {
        this.load();
      }
    },15000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  toggleRefresh(): void {
    this.refresh = !this.refresh;
    let onOff = this.refresh ? 'on' : 'off';
    this.alertService.alert(`you have turnd the automatic refresh ${onOff}`,'info');

  }

  reset(): void {
    this.accountService.reset()
    this.alertService.alert(`you have reseted your portfolio`,'info');

  }

  private load(): void {
    this.stockService.getStocks().subscribe(result => {
      this.stocks = result;
    }, errors => {
      console.error('there was an error loading stocks ...' + errors)
    })
  }
}
