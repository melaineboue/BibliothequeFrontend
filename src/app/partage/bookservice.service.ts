import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http : HttpClient) { }

  getMyBooks(){
    return this.http.get("http://melaineboue.com/api/formations/");
  }
}
