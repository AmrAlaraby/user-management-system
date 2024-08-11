import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { UsersService } from './../../../../services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit{

  constructor(private _usersService:UsersService,private router:Router){}

idForDelete:number=0
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

openDeleteAlert(id:number){
console.log(id);
this.idForDelete=id
}

deleteUser(id:number){
  console.log(id);
  this._usersService.deleteUser(id).subscribe({
    next : (res) =>{
      console.log(res);

    },
    error : (err) =>{
      console.log(err);
      
    },
    complete : ()=>{
      console.log('completed');
      this.idForDelete=0
      delete this.users[id-1]
      console.log(this.users);
      
      
    }
  })
}
navToUpdate(user:User){
const stringUser =JSON.stringify(user)
  this.router.navigate([`management-system/update-user/${user.id}`])
}
  }

