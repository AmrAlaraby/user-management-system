import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementSystemComponent } from './components/management-system/management-system.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { authGuard } from 'src/app/gaurds/auth.guard';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path:"management-system",component:ManagementSystemComponent,
    children:[
      {
        path:'',component:AllUsersComponent
      },
      {
        path:'all-users',component:AllUsersComponent
      },
      {
        path:'add-user',component:AddUserComponent
      },
      {
        path:'profile',component:ProfileComponent
      },
      {
        path:'update-user/:user',component:UpdateUserComponent
      },

    ],canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
