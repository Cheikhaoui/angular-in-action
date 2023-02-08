import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChatListComponent } from "./chat-list/chat-list.component";
import { ChatComponent } from "./chat/chat.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuardService } from "./services/auth-guard.service";
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'users', component: ChatListComponent, outlet: "chat", canActivate: [AuthGuardService] },
    { path: 'users/:username', component: ChatComponent, outlet: "chat", canActivate:[AuthGuardService] },
    { path: 'blogs', loadChildren: 'app/blogs/blogs.module#BlogsModule' },
    { path: '', redirectTo: '/forums', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoute {

}

