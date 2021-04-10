import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class SalesrepService {
  
  private baseUrl='http://localhost:5000/api/token';
  constructor(private http:HttpClient) { }

  getId(token:string):Observable<any>
  {
    return this.http.get<any>(`${this.baseUrl}/getId`,{
      params:new HttpParams()
        .set('token',token)
    })
  }

}

