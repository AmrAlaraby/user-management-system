import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  errorMessage=''
  loginForm!:FormGroup
constructor(private _formBuilder:FormBuilder,private _userService:UsersService,private _router:Router){}
  ngOnInit(): void {
    this.initLoginForm()
  }
  initLoginForm(){
    this.loginForm= this._formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      age:['',Validators.required],
      email:['',Validators.required], 
      phone:['',Validators.required],
      birthDate:['',Validators.required]
    })
  }
  submitLogin(){
    console.log(this.loginForm);
    if (this.loginForm.valid){
      this.callLoginApi()
    }
  }
  
  callLoginApi(){
  this._userService.addUser(this.loginForm.value).subscribe({
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
