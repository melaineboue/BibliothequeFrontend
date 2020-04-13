import { User } from './user.model';

export class Book {
    id : number;
    name : string;
    status : string;
    category : string;
    deleted: boolean
    user : User
}