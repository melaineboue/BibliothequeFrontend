import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { MybooksComponent } from './mybooks/mybooks.component';


const routes: Routes = [
  { path: '', component : MybooksComponent},
  { path: 'add-book', component : AddbookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
