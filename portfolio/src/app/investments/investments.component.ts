import { Component } from '@angular/core';
import { DoCheck } from '@angular/core/public_api';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements DoCheck{
  cost: number = 0;
  value: number = 0;
  change: number = 0;
  stocks: any = [];
  length: number = 0;

  constructor(private accountService: AccountService) {}

  sell(index): void {
      this.accountService.sell(index);
  }

  ngDoCheck(): void {
    if (this.accountService.stocks.length !== this.stocks.length) {
      this.stocks = this.accountService.stocks;
      }
      if (this.cost !== this.accountService.cost || this.value !== this.
      accountService.value) {
      this.cost = this.accountService.cost;
      this.value = this.accountService.value;
      this.change = this.accountService.value - this.accountService.cost;
      }
  }
}
