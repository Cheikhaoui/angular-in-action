import {NgModule} from "@angular/core";
import {DashbordComponent} from "./components/dashbord/dashbord.component";
import {RouterModule, Routes} from "@angular/router";
import {ManageComponent} from "./components/manage/manage.component";

const routes : Routes = [
  {path:'',component :DashbordComponent},
  {path: 'manage',component:ManageComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class RouteModule {

}
