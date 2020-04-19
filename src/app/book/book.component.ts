import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../partage/book.model';
import { BookService } from '../partage/bookservice.service';
import { LoanService } from '../partage/loan.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book : Book;
  @Input() owner : string;
  @Output() refreshBooks = new EventEmitter<boolean>(); 

  constructor(private bookSerive : BookService, private loanService : LoanService) { }

  ngOnInit(): void {}

  deleteBook(idBook:number)
  {
    this.bookSerive.deleteBook(idBook).subscribe(()=>{
      this.refreshBooks.emit();
    }, (response: any) =>{
      if(response && response.status === 409 ){
        alert("Conflict, car emprunt en cours.");
      }
          
    });
  }

  isMine():boolean
  {
    return this.owner=="me";
  }

  isNotMine():boolean
  {
    return this.owner=="other";
  }

  loanBook(bookId:number)
  {
    this.loanService.createLoan(1,bookId).subscribe(()=>{
      this.refreshBooks.emit();
    });

  }

}
