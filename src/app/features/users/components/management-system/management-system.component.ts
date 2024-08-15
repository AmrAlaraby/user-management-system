import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-system',
  templateUrl: './management-system.component.html',
  styleUrls: ['./management-system.component.scss']
})
export class ManagementSystemComponent {
  constructor(private _router:Router){}
logout(){
  console.log('logout');
  localStorage.removeItem('userPayload')
  this._router.navigate(['login'])
  
}
}
