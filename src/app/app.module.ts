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
import { DeconnecterComponent } from './deconnecter/deconnecter.component';
import { LoanComponent } from './loan/loan.component';

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
    DeconnecterComponent,
    LoanComponent
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
