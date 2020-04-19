import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan } from './loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  
  

  constructor(private http : HttpClient) { }

  getCurrentLoansFromUserId(id:number)
  {
    return this.http.get<Loan[]>("/users/currentLoan/"+id);
  }

  getOldLoansFromUserId(userId:number)
  {
    return this.http.get<Loan[]>("/users/oldLoan/"+userId);
  }

  closeLoan(loanId: number) {
    return this.http.delete("/loans/"+loanId);
  }

  createLoan(userId: number, bookId: number) {
    return this.http.get("/users/"+userId+"/books/"+bookId+"/loan");
  }
}
