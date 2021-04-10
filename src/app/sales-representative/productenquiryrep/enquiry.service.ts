import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enquiry } from './enquiry';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  private baseUrl='http://localhost:5000/api/productenquiry';
  private Url='http://localhost:5000/api/token';
  
  constructor(private http:HttpClient) { }

  getId(token:string):Observable<any>
  {
    return this.http.get<any>(`${this.Url}/getId`,{
      params:new HttpParams()
        .set('token',token)
    })
  }

  AddEnquiry(enquiry:Enquiry):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/AddEnquiry`,enquiry,httpOptions);
  }

  getEnquiries():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/getEnquiries`);
  }

  getAcceptedEnquiriesForRep():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/getAcceptedEnquiriesForRep`,{
      params:new HttpParams()
        .set('salesrep',localStorage.getItem('salesrep'))
    });
  }

  getWaitingEnquiriesForRep():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/getWaitingEnquiriesForRep`,{
      params:new HttpParams()
        .set('salesrep',localStorage.getItem('salesrep'))
    });
  }

  
  getRejectedEnquiriesForRep():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/getRejectedEnquiriesForRep`,{
      params:new HttpParams()
        .set('salesrep',localStorage.getItem('salesrep'))
    });
  }

  getAcceptedEnquiries():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/getAcceptedEnquiries`);
  }
  
  rejectEnquiry(enquiry:Enquiry):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/rejectEnquiry`,{
      params:new HttpParams()
        .set('_id',enquiry._id)
    });
  }

  acceptEnquiry(enquiry:Enquiry):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/acceptEnquiry`,{
      params:new HttpParams()
        .set('_id',enquiry._id)
    });
  }

  searchAcceptedEnquiryByRep(id:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/searchAcceptedEnquiryByRep`,{
      params:new HttpParams()
        .set('id',id)
    });
  }
}