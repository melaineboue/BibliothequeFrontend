import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { MyloansComponent } from './myloans/myloans.component';
import { FreebooksComponent } from './freebooks/freebooks.component';
import { DeconnecterComponent } from './deconnecter/deconnecter.component';


const routes: Routes = [
  { path: '', component : MybooksComponent},
  { path: 'mes-livres', component : MybooksComponent},
  { path: 'add-book', component : AddbookComponent },
  { path : 'mes-emprunts', component : MyloansComponent},
  { path : 'livres-disponible', component : FreebooksComponent},
  { path : 'deconnecter', component : DeconnecterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

