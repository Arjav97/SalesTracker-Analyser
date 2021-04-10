import { Injectable } from '@angular/core';
import { Order } from './order';
import * as uuid from 'uuid/v4';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private baseUrl='http://localhost:5000/api/order';
  constructor(private http:HttpClient) { }

  addOrder():Order{
   
    let order:Order;
     order={
      id:uuid(),
      isChecked:false,
      product:'',
      price:'',
      qty:'',
      total:''
    }
    return order;
  }

  checkquantity(pro,qty):Observable<any>{
      
    return this.http.get<any>(`${this.baseUrl}/checkquantity`,{params:new HttpParams()
        .set('pro',pro)
        .set('qty',qty)
       });
  }

  submit(orders:Order[],customer,datestring,total):Observable<any>{
   
    return this.http.post<any>(`${this.baseUrl}/Submit`,orders,{headers:new HttpHeaders({
      'Content-Type':'application/json',
      'salesrep':localStorage.getItem('salesrep'),
      'customer':customer,
      'datestring':datestring,
      'id':uuid(),
      'total':total
    })})
  }
}
