import { loginPayload } from './../../features/auth/interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginResponse } from 'src/app/features/auth/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClint:HttpClient) { }

  login(payload:loginPayload):Observable<loginResponse>{
    return this._httpClint.post<loginResponse>('https://dummyjson.com/auth/login',payload)
  }
}
