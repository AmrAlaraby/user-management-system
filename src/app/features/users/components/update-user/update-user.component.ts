import { User } from 'src/app/features/users/interfaces/user';

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
  myUser!:User
constructor(private _activatedRoute:ActivatedRoute,private _formBuilder:FormBuilder,private _userService:UsersService,private _router:Router){}

  ngOnInit(): void {

    this._activatedRoute.params.subscribe((param:any)=>{
      console.log(param);
      this.id=param.user
      
      })
    this.initLoginForm()
    this.getMyUser()
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
  getMyUser()
  {
    this._userService.getUserById(this.id).subscribe({
      next : res=>{

         console.log(res)
         this.myUser=res
         console.log(this.myUser);
         this.loginForm.patchValue({...res})
         

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
