import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../partage/book.model';
import { BookService } from '../partage/bookservice.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book : Book;
  @Output() refreshBooks = new EventEmitter<boolean>(); 

  constructor(private bookSerive : BookService) { }

  ngOnInit(): void {
  }

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

}
