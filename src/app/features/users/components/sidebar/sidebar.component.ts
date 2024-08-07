import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  payload=JSON.parse(localStorage.getItem('userPayload')||'') 
  ngOnInit(): void {
    console.log(this.payload);
    
  }
}
