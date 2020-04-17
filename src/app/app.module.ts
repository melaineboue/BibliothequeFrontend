import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './partage/bookservice.service';
import { BookComponent } from './book/book.component';
import { AddbookComponent } from './addbook/addbook.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MybooksComponent,
    BookComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
