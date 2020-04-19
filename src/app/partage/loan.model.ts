import { User } from './user.model'
import { Book } from './book.model'

export class Loan{
    id:number
    lender : User
    book : Book
    borrower : User
    askDate : Date
    closeDate : Date
}