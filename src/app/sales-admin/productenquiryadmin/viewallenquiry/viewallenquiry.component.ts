import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/sales-representative/productenquiryrep/enquiry.service';
import { Enquiry } from 'src/app/sales-representative/productenquiryrep/enquiry';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-viewallenquiry',
  templateUrl: './viewallenquiry.component.html',
  styleUrls: ['./viewallenquiry.component.css']
})
export class ViewallenquiryComponent implements OnInit {

  enquiries:Enquiry[];
  success:string;
  message:string;

  constructor(private enquiryservice:EnquiryService) { }

  ngOnInit() {
    this.getEnquiries();
  }

  getEnquiries():void{
    this.enquiryservice.getEnquiries().subscribe(result=>{
      this.enquiries=result['enquiries'];
      this.success=result['success'];
      this.message=result['message'];
      if(this.success==='false')
      {
        UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>${this.message}`,status:'danger',pos:'top-center',timeout: 1000});
      }
      else
      {
        UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>${this.message}`,status:'success',pos:'top-center',timeout: 1000});
      }
      
    });
  }

  rejectEnquiry(enquiry:Enquiry):void{
    this.enquiries=this.enquiries.filter(e=>e!==enquiry);
    this.enquiryservice.rejectEnquiry(enquiry).subscribe(result=>{
      
      this.success=result['success'];
      this.message=result['message'];
      
      if(this.success==='false')
      {
        UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>${this.message}`,status:'danger',pos:'top-center'});
      }
      else
      {
        UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>${this.message}`,status:'success',pos:'top-center'});
      }
      
    });
  }

  acceptEnquiry(enquiry:Enquiry):void{
    this.enquiries=this.enquiries.filter(e=>e!==enquiry);
    this.enquiryservice.acceptEnquiry(enquiry).subscribe(result=>{
      
      this.success=result['success'];
      this.message=result['message'];
      
      if(this.success==='false')
      {
        UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>${this.message}`,status:'danger',pos:'top-center'});
      }
      else
      {
        UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>${this.message}`,status:'success',pos:'top-center'});
      }
      
    });
  }
}
