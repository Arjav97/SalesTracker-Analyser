import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Followup } from './followup';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl='http://localhost:5000/api/customer';
  private Url='http://localhost:5000/api/token';
  
  constructor(private http:HttpClient) { }

  getId(token:string):Observable<any>
  {
    return this.http.get<any>(`${this.Url}/getId`,{
      params:new HttpParams()
        .set('token',token)
    })
  }
  
  AddCustomer(email,name,desc,date,datestring):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/AddCustomer`,{
      params:new HttpParams()
        .set('email',email)
        .set('name',name)
        .set('desc',desc)
        .set('date',date)
        .set('datestring',datestring)
        .set('salesrep',localStorage.getItem('salesrep'))
      })
  }

  showallFollowUps(cust:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/showallFollowUps`,{
      params:new HttpParams()
        .set('salesrep',localStorage.getItem('salesrep'))
        .set('email',cust)
    })
  }

  searchCustomerFollowUp(cust:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/searchCustomerFollowUp`,{
      params:new HttpParams()
        .set('email',cust)
        .set('salesrep',localStorage.getItem('salesrep'))
    })
  }

  removeFollowUp(followup:Followup):Observable<void>{
    return this.http.get<void>(`${this.baseUrl}/removeFollowUp`,{
      params:new HttpParams()
        .set('id',followup._id)
      });
  }

  addnewFollowUp(email,desc,datestring):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/addnewFollowUp`,{
      params:new HttpParams()
        .set('email',email)
        .set('desc',desc)
        .set('datestring',datestring)
        .set('salesrep',localStorage.getItem('salesrep'))
      });
  }

  searchcustomerHistory(customer:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/searchcustomerHistory`,{
      params:new HttpParams()
        .set('customer',customer)
        .set('salesrep',localStorage.getItem('salesrep'))
    });
  }

  viewallcustomerordersforRep():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/viewallcustomerordersforRep`,{
      params:new HttpParams()
      .set('salesrep',localStorage.getItem('salesrep'))
    });
  }

  viewallcustomerordersforAdmin():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/viewallcustomerordersforAdmin`);
  }

  viewallcustomerordersforAdminbyRep(salesrep:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/viewallcustomerordersforAdminbyRep`,{
      params:new HttpParams()
      .set('salesrep',salesrep)
    });
  }

  filterordersbydatesbyrep(date1,date2):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/filterordersbydatesbyrep`,{
      params:new HttpParams()
      .set('salesrep',localStorage.getItem('salesrep'))
      .set('date1',date1)
      .set('date2',date2)
    });
  }

  filterordersbydates(date1,date2):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/filterordersbydates`,{
      params:new HttpParams()
      .set('date1',date1)
      .set('date2',date2)
    });
  }
}