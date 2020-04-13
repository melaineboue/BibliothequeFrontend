import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = "localhost:8081/users/1/books/1";
  apiUrl2 = "localhost:8081/users";
  apiUrl3 = "https://jsonplaceholder.typicode.com/users";
  apiUrl4 = "http://melaineboue.com/api/formations/";
  apiUrlCut = "/users/1/books/1";
  
  constructor(private http : HttpClient) { }

  getMyBooks(){
    console.log("getMyBooks()");
    return this.http.get<User[]>(this.apiUrlCut); 
  }
}



