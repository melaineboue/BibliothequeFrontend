import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  userlastname : string = '';
  userfirstname : string = '';
  email : string = '';

  constructor(private http : HttpClient) { }

  login(user: User):any {
    var bodyFormData = new FormData();
    bodyFormData.set("username", user.email);
    bodyFormData.set("password", user.password);
    return this.http.post("/login", bodyFormData);
  }

  logout():any
  {
    
  }

  isAuthenticated(): any {
    return this.http.get("/users/isAuthenticated/userId");
  }

  getAuthenticatedUser(): Observable<any>
  {
    return this.http.get("/users/isAuthenticated/user");
  }

  deconnecter() {
    return this.http.get("/logout");
  }
  
}
