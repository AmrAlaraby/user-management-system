import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/features/users/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClint:HttpClient) { }
  getUsers():Observable<any>{
    return this._httpClint.get('https://dummyjson.com/users')

  }
  deleteUser(id:number):Observable<any>{
    return this._httpClint.delete(`https://dummyjson.com/users/${id}`)
  }
  addUser(info:User):Observable<any>{
    return this._httpClint.post('https://dummyjson.com/users/add',info)
  }
  updateUser(id:number,info:User):Observable<any>{
    return this._httpClint.put(`https://dummyjson.com/users/${id}`,info)
  }
  getUserById(id:number):Observable<any>{
    return this._httpClint.get(`https://dummyjson.com/users/${id}`)

  }
}
