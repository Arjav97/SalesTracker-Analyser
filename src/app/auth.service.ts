import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { User } from './user'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseUrl='http://localhost:5000/api/sales';
  
  constructor(private http:HttpClient) { }

  registerUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/register`,user,httpOptions);
  }

  loginUser(username:string,password:string):Observable<User>{
      return this.http.get<User>(`${this.baseUrl}/login`,{params:new HttpParams()
        .set('username',username)
        .set('password',password)});
  }
 
}
