import { User } from './../../interfaces/user';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  errorMessage=''
  loginForm!:FormGroup
  id:number=0
constructor(private _activatedRoute:ActivatedRoute,private _formBuilder:FormBuilder,private _userService:UsersService,private _router:Router){}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param:any)=>{
      console.log(param);
      this.id=param.user
      })
    this.initLoginForm()
  }
  initLoginForm(){
    this.loginForm= this._formBuilder.group({
      FirstName:['',Validators.required],
      lastName:['',Validators.required],
      age:['',Validators.required]
    })
  }
  submitLogin(){
    console.log(this.loginForm);
    if (this.loginForm.valid){
      this.callLoginApi()
    }
  }
  
  callLoginApi(){
  this._userService.updateUser(this.id,this.loginForm.value).subscribe({
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
