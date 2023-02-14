import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SummaryComponent} from './components/summary/summary.component';
import {DashbordComponent} from './components/dashbord/dashbord.component';
import {ManageComponent} from './components/manage/manage.component';
import {FormsModule} from "@angular/forms";
import {RouteModule} from "./routeModule";
import { CardTypeDirective } from './directives/card-type.directive';
import { CardHOVERDirective } from './directives/card-hover.directive';
import { DelayDirective } from './directives/delay.directive';
import { ChangePipe } from './pipes/change.pipe';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashbordComponent,
    ManageComponent,
    CardTypeDirective,
    CardHOVERDirective,
    DelayDirective,
    ChangePipe
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouteModule
  ],
  providers: [CurrencyPipe,PercentPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
