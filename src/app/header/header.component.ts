import { Component, OnInit } from '@angular/core';
import { LoginService } from '../partage/login.service';
import { User } from '../partage/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user:User = {
    id: 0,
    firstname: '',
    lastname : '',
    email : '',
    password : ''
  }

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit(): void {
    this.loginService.getAuthenticatedUser().subscribe((user: User) =>{
      if(user!=null)
        this.user = user;
    });
  }

  deconnecter()
  {
    this.loginService.deconnecter().subscribe(() => {
      this.router.navigate(['']);
    });
  }

}
