import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  return: string = '';

  constructor(private router:Router , private route:ActivatedRoute , private userService:UserService){}

  ngOnInit() {
    this.route.queryParams.subscribe(p=>{
      this.return = p['retuen'] || '/forums';
      if(!this.userService.isGuest){
        this.go();
      }
    })
  }

  login() {
    if(this.username && this.password){
      this.userService.login(this.username)
      this.go();
    }
  }

  go(){
    this.router.navigateByUrl(this.return)
  }
}
