import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Loan } from '../partage/loan.model';
import { LoanService } from '../partage/loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  @Input() loan : Loan;
  @Output() refreshLoans :EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private loanService : LoanService, private router:Router) { }

  ngOnInit(): void {
  }

  isCloturer():boolean
  {
    return this.loan.closeDate != null;
  }

  

  cloturerEmprunt(loanId: number)
  {
    this.loanService.closeLoan(loanId).subscribe(()=>{
      console.log("Appel service");
      //this.refreshLoans.emit();
      this.router.navigate(["mes-emprunts"]);
    }, (response: any) =>{
      if(response && response.status === 409 ){
        alert("Conflict, car emprunt en cours.");
      }
          
    });
  }

}
