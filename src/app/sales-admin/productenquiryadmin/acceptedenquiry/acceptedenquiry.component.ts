import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/sales-representative/productenquiryrep/enquiry.service';
import { Enquiry } from 'src/app/sales-representative/productenquiryrep/enquiry';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-acceptedenquiry',
  templateUrl: './acceptedenquiry.component.html',
  styleUrls: ['./acceptedenquiry.component.css']
})
export class AcceptedenquiryComponent implements OnInit {
 
  enquiries:Enquiry[];
  success:string;
  message:string;
  p:number=1;
  
  constructor(private enquiryservice:EnquiryService) { }

  ngOnInit() {
    this.getAcceptedEnquiries();
  }

  getAcceptedEnquiries():void{
    this.enquiryservice.getAcceptedEnquiries().subscribe(result=>{
      this.enquiries=result['enquiries'];
      this.success=result['success'];
      this.message=result['message'];
    
      if(this.success==='false')
      {
        this.enquiries=[];
        UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>${this.message}`,status:'danger',pos:'top-center',timeout: 1000});
      }
      else
      {
        this.p=1;
        UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>${this.message}`,status:'success',pos:'top-center',timeout: 1000});
      }
      
    });
  }

  searchAcceptedEnquiryByRep(id:string):void{
    this.enquiryservice.searchAcceptedEnquiryByRep(id).subscribe(result=>{
      this.enquiries=result['enquiries'];
      this.success=result['success'];
      this.message=result['message'];
     
      if(this.success==='false')
      {
        this.enquiries=[];
        UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>${this.message}`,status:'danger',pos:'top-center',timeout: 1000});
      }
      else
      {
        this.p=1;
        UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>${this.message}`,status:'success',pos:'top-center',timeout: 1000});
      }
    });
  }
}
