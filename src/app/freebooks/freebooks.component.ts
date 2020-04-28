import { Component, OnInit } from '@angular/core';
import { BookService } from '../partage/bookservice.service';
import { Book } from '../partage/book.model';

@Component({
  selector: 'app-freebooks',
  templateUrl: './freebooks.component.html',
  styleUrls: ['./freebooks.component.scss']
})
export class FreebooksComponent implements OnInit {

  books : Book[];
  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.bookService.getLoanableBooks(parseInt(sessionStorage.getItem("userId"))).subscribe((data)=>{
      this.books = data;
    });
  }

  getBooks()
  {
    
  }

}
