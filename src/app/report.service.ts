import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl='http://localhost:5000/api/report';

  constructor(private http:HttpClient) { }

  productremaining():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/productremaining`);
     }

  productconsumptionforAdmin(date1,date2):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/productconsumptionforAdmin`,{
      params:new HttpParams()
      .set('date1',date1)
      .set('date2',date2)
    });
  }

  productconsumptionforRep(date1,date2):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/productconsumptionforRep`,{
      params:new HttpParams()
      .set('salesrep',localStorage.getItem('salesrep'))
      .set('date1',date1)
      .set('date2',date2)
    });
  }

  totalSalesforAdmin(date1,date2):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/totalSalesforAdmin`,{
      params:new HttpParams()
      .set('date1',date1)
      .set('date2',date2)
    });
  }

  salesrepadmin(date1,date2,salesrep):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/salesrepadmin`,{
      params:new HttpParams()
      .set('date1',date1)
      .set('date2',date2)
      .set('salesrep',salesrep)
    });
  }

  salesrepcustomeradmin(date1,date2,customer,salesrep):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/salesrepcustomeradmin`,{
      params:new HttpParams()
      .set('date1',date1)
      .set('date2',date2)
      .set('customer',customer)
      .set('salesrep',salesrep)
    });
  }

  customerspecific(date1,date2,customer):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/customerspecific`,{
      params:new HttpParams()
      .set('date1',date1)
      .set('date2',date2)
      .set('customer',customer)
    });
  }

  allcustomerpurchase(date1,date2):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/allcustomerpurchase`,{
      params:new HttpParams()
      .set('date1',date1)
      .set('date2',date2)
      });
  }

}
