import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SummaryComponent} from './components/summary/summary.component';
import {DashbordComponent} from './components/dashbord/dashbord.component';
import {ManageComponent} from './components/manage/manage.component';
import {FormsModule} from "@angular/forms";
import {RouteModule} from "./routeModule";

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashbordComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
