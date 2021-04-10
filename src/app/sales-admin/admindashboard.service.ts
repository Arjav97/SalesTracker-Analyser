import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  private Url='http://localhost:5000/api/token';
  private baseUrl='http://localhost:5000/api/admindashboard';
  
  constructor(private http:HttpClient) { }

  getId(token:string):Observable<any>
  {
    return this.http.get<any>(`${this.Url}/getId`,{
      params:new HttpParams()
        .set('token',token)
    });
  }

  testing():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/testing`);
  }

}
