import { Component, OnInit } from '@angular/core';
import { Book } from '../partage/book.model';
import { BookService } from '../partage/bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  book : Book = {
    name : '',
    category : '',
    id : 0,
    status : '',
    deleted: false,
    user : null
  };
  constructor(private bookService : BookService, private router : Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log("Save AddBook");
    console.log(this.book);
    this.bookService.save(this.book).subscribe(()=>{
      this.router.navigate([""]);
    });
  }

}
