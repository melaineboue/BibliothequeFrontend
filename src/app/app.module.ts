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
import { MecoComponent } from './meco/meco.component';
import { HeaderComponent } from './header/header.component';
import { MyloansComponent } from './myloans/myloans.component';
import { FreebooksComponent } from './freebooks/freebooks.component';
import { LoanComponent } from './loan/loan.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MybooksComponent,
    BookComponent,
    AddbookComponent,
    MecoComponent,
    HeaderComponent,
    MyloansComponent,
    FreebooksComponent,
    LoanComponent,
    LoginComponent,
    HomeComponent,
    AddUserComponent
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
