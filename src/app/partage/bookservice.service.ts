import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  
  
  apiUrl = "https://jsonplaceholder.typicode.com/users";
  apiUrl2 = "http://melaineboue.com/api/formations/";
  apiUrlCut = "/users/"+sessionStorage.getItem("userId")+"/books/";
  apiDelete = "/books/";
  apiCreate = "/users/"+sessionStorage.getItem("userId")+"/book";
  apiLoanableBooks = "/users/free/";

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

  getLoanableBooks(id:number)
  {
    return this.http.get<Book[]>(this.apiLoanableBooks+id);
  }
}



