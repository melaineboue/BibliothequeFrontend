import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './partage/bookservice.service';

@NgModule({
  declarations: [
    AppComponent,
    MybooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
