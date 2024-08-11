import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginResponse } from 'src/app/features/auth/interfaces/auth.interface';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userpayload=JSON.parse(localStorage.getItem('userPayload') || "")
  myUser!:User
  errorMessage=''
  loginForm!:FormGroup
constructor(private _formBuilder:FormBuilder,private _userService:UsersService,private _router:Router){}
  ngOnInit(): void {
    this.initLoginForm()
  }
  initLoginForm(){
    this.loginForm= this._formBuilder.group({
      FirstName:['',Validators.required],
      lastName:['',Validators.required],
      age:['',Validators.required]
    })
  }
  getMyUser()
  {
    this._userService.getUserById(this.userpayload.id).subscribe({
      next : res=>{
         console.log(res)
         this.myUser

      },
      error:err=> {
    this.errorMessage=err.error.message;
    
      }
      
    })
  }
  submitLogin(){
    console.log(this.loginForm);
    if (this.loginForm.valid){
      this.callLoginApi()
    }
  }
  
  callLoginApi(){
    this._userService.updateUser(this.userpayload.id,this.loginForm.value).subscribe({
    next : res=>{
       console.log(res)
       this._router.navigate(['management-system/all-users'])
    },
    error:err=> {
  this.errorMessage=err.error.message;
  
    }
    
  })
  }

}
