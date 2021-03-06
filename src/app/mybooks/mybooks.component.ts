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
  mybooks: Book[];
  user:User;
  constructor(private bookService : BookService) { 
    this.mybooks = [];
  }

  ngOnInit(): void {
    console.log('ngOnInit mybooks');
    this.bookService.getMyBooks().subscribe(data => {
      this.mybooks = data;
      console.log(data);
    });
  }

  

}
