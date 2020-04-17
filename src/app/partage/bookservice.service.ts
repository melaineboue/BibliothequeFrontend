import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  
  
  apiUrl = "localhost:8081/users/1/books/1";
  apiUrl1 = "http://localhost:8081/users/1/books/1";
  apiUrl2 = "localhost:8081/users";
  apiUrl3 = "https://jsonplaceholder.typicode.com/users";
  apiUrl4 = "http://melaineboue.com/api/formations/";
  apiUrlCut = "/users/1/books/";
  apiDelete = "/books/";
  apiCreate = "/users/1/book";
  constructor(private http : HttpClient) { }

  getMyBooks(){
    console.log("getMyBooks()");
    return this.http.get<Book[]>(this.apiUrlCut); 
  }

  deleteBook(id: number): any {
    return this.http.delete<any>(this.apiDelete+id);
    
  }

  save(book: Book) {
    console.log("Save BookService");
    return this.http.post(this.apiCreate, book);
  }
}



