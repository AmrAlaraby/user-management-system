import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
constructor(private _formBuilder:FormBuilder,private _authService:AuthService){}
ngOnInit(): void {
  this.initLoginForm()
}
initLoginForm(){
  this.loginForm= this._formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
}
submitLogin(){
  console.log(this.loginForm);
  if (this.loginForm.valid){
    this.callLoginApi()
  }
}

callLoginApi(){
this._authService.login(this.loginForm.value).subscribe({
  next : res=> console.log(res)
  
})
}

}
