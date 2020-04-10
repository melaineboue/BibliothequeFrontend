import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.scss']
})
export class MybooksComponent implements OnInit {
  book : string;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.book = "Melaine Boue";
  }

}
