import { Component, OnInit } from '@angular/core';
import { User } from '../partage/user.model';
import { LoginService } from '../partage/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : User = {
    id: 0,
    firstname: "",
    lastname : "",
    email : "",
    password : ""
  };

  authenticationFailed:boolean = false;

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit(): void {
  }

  login()
  {
    this.loginService.login(this.user).subscribe(()=>{
      this.authenticationFailed =false;
      this.router.navigate(["home/meslivres"]);
    }, ()=>{
      this.authenticationFailed =true;
    });
  }
}
