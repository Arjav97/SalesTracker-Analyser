import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './sales-admin/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductcatalogueService {
  private baseUrl='http://localhost:5000/api/productops';
  private Url='http://localhost:5000/api/token';

  constructor(private http:HttpClient) { }

  getDesignation(token:string):Observable<any>{
    return this.http.get<any>(`${this.Url}/getId`,{params:new HttpParams()
    .set('token',token)
   });
  }

  getProducts():Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/productcatalogue`);
  }

  searchProduct(pro:string):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/searchproduct`,{params:new HttpParams()
      .set('pro',pro)
     });
  }

  getCategories():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/getCategories`);
  }

  searchCategory(category:string):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/searchCategory`,{params:new HttpParams()
      .set('category',category)
     });
  }

  getProduct(id:string):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/getProduct`,{params:new HttpParams()
      .set('id',id)
     });
  }
}
