import { Component, OnInit } from '@angular/core';
import { User } from '../partage/user.model';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user : User = {
    id: 0,
    firstname: '',
    lastname : '',
    email : '',
    password : ''
  };

  userCreated : boolean = false;
  userCreatingConflict : boolean = false;

  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void { }

  createUser()
  {
    this.userService.createUser(this.user).subscribe(()=>{
      this.userCreated = true;
      this.userCreatingConflict = false;
      this.router.navigate(["home/meslivres"]);
    },
    (error: HttpErrorResponse) => {
      if(error.status == 409)
        this.userCreatingConflict = true;
      this.userCreated = false;
    });
  }
}
