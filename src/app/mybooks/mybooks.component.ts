import { Component, OnInit } from '@angular/core';
import { BookService } from '../partage/bookservice.service';
import { Book } from '../partage/book.model';
import { User } from '../partage/user.model';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.scss']
})
export class MybooksComponent implements OnInit {
  book : string;
  mybooks: User[];
  constructor(private bookService : BookService) { 
    
  }

  ngOnInit(): void {
    this.book = "Melaine Boue 2";
    console.log('ok111');
    this.bookService.getMyBooks().subscribe(data => this.mybooks = data);
  }

}
