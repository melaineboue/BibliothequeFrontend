import { Component, OnInit } from '@angular/core';
import { Loan } from '../partage/loan.model';
import { LoanService } from '../partage/loan.service';

@Component({
  selector: 'app-myloans',
  templateUrl: './myloans.component.html',
  styleUrls: ['./myloans.component.scss']
})
export class MyloansComponent implements OnInit {

  loans : Loan[];
  oldLoans: Loan[];
  constructor(private loanService: LoanService) { }
  
  ngOnInit(): void {
    this.loans=[];
    this.oldLoans=[];
    this.loanService.getCurrentLoansFromUserId(parseInt(sessionStorage.getItem("userId"))).subscribe((data)=>{
      this.loans = data;
    });
    this.loanService.getOldLoansFromUserId(parseInt(sessionStorage.getItem("userId"))).subscribe((data)=>{
      this.oldLoans = data;
    });

  }

}
