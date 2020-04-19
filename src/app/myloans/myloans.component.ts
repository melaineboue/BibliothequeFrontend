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
    console.log("Debut ngOnInit MyLoans");
    this.loanService.getCurrentLoansFromUserId(1).subscribe((data)=>{
      this.loans = data;
      console.log("Chargement current loans");

    });
    this.loanService.getOldLoansFromUserId(1).subscribe((data)=>{
      this.oldLoans = data;
      console.log("Chargement old loans");

    });
    console.log("Fin ngOnInit MyLoans");

  }

}
