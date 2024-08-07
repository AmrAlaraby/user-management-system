import { UsersService } from './../../../../services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit{
  constructor(private _usersService:UsersService){}
users:Array<any>=[]
ngOnInit(): void {
  this._usersService.getUsers().subscribe({
    next : (res) =>{
      console.log(res);
      this.users=res.users
      console.log(this.users);
      


      

    },
    error : (err) =>{
      console.log(err);
      
    },
    complete : ()=>{
      console.log('completed');
      
    }
  })
}
}
