import { Injectable } from '@angular/core';
import { User } from './partage/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    console.log(user.firstname+"/"+user.lastname);
    return this.http.post("/users", user);
  }
}
