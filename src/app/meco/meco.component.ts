import { Component, OnInit, HostBinding, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-meco',
  templateUrl: './meco.component.html',
  styleUrls: ['./meco.component.scss']
})
export class MecoComponent implements OnInit {

  @Input() value:string;
  @HostBinding('style.color') color:string;
  constructor() {}

  @HostListener('mouseover') changerCouleur()
  {
    this.color = "red";
  }

  @HostListener('mouseout') retablirCouleur()
  {
    this.color = "black";
  }

  ngOnInit(): void {
  }



}
