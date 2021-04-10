import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {Product} from './product';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable({
  providedIn: 'root'
})
export class ProductoperationService {
  
  private baseUrl='http://localhost:5000/api/product';
  
  constructor(private http:HttpClient) { }

  addProduct(product:Product):Observable<Product>{
      return this.http.post<Product>(`${this.baseUrl}/entry`,product,httpOptions)
  }
  addQty(id,qty):Observable<Product>{
    
      return this.http.get<Product>(`${this.baseUrl}/addqty`,{params:new HttpParams()
        .set('id',id)
        .set('qty',qty)});
  }
  updateProduct(id,price,comm):Observable<Product>{
    
    return this.http.get<Product>(`${this.baseUrl}/updateProduct`,{params:new HttpParams()
      .set('id',id)
      .set('price',price)
      .set('comm',comm)});
  }
}
