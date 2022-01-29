import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserslistComponent} from './userslist/userslist.component';
import {AddUserComponent} from './add-user/add-user.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginActivateService} from './login-activate.service';
const routes: Routes = [
  {path:'users', component:UserslistComponent},
  {path:'users/new',component:AddUserComponent},
  {path: 'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate:[LoginActivateService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
