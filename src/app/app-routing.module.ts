import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { MyloansComponent } from './myloans/myloans.component';
import { FreebooksComponent } from './freebooks/freebooks.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './partage/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  { path : '', component : LoginComponent},
  { path: 'adduser', component : AddUserComponent},
  { path : 'home', component : HomeComponent,
      children:[
        { path: 'meslivres', component : MybooksComponent, canActivate: [AuthGuardService]},
        { path: 'add-book', component : AddbookComponent, canActivate: [AuthGuardService] },
        { path : 'mes-emprunts', component : MyloansComponent, canActivate: [AuthGuardService]},
        { path : 'livres-disponible', component : FreebooksComponent, canActivate: [AuthGuardService]},
      ]
  },
  { path : '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

