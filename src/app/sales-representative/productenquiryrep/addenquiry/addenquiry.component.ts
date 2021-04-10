import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EnquiryService } from '../enquiry.service';
import { Enquiry } from '../enquiry';
import * as UIkit from 'uikit';
import * as uuid from 'uuid/v4';

@Component({
  selector: 'app-addenquiry',
  templateUrl: './addenquiry.component.html',
  styleUrls: ['./addenquiry.component.css']
})
export class AddenquiryComponent implements OnInit{

  pipe = new DatePipe('en-US');
  datestring:string;
  enquiry:Enquiry;
  success:string;
  message:string;

  ngOnInit(){
    this.transformDate();
  }

  transformDate():void
  {
    this.datestring=this.pipe.transform(new Date(),'dd-MM-yy');
  }
  
  constructor(private enquiryservice:EnquiryService) { }
  
  AddEnquiry(desc):void{
    let salesrep=localStorage.getItem('salesrep');
    let status="waiting";
    let _id=uuid();
    let date=new Date();
    let datestring=this.datestring;
    this.enquiryservice.AddEnquiry({_id,desc,status,salesrep,date,datestring} as Enquiry).subscribe(enquiry=>{
      this.enquiry=enquiry['enquiry'];
      this.success=enquiry['success'];
      this.message=enquiry['message'];
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

}
