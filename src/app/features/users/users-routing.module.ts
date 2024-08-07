import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementSystemComponent } from './components/management-system/management-system.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { authGuard } from 'src/app/gaurds/auth.guard';

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

    ],canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
