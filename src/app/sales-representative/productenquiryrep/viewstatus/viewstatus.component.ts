import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/sales-representative/productenquiryrep/enquiry.service';
import { Enquiry } from 'src/app/sales-representative/productenquiryrep/enquiry';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.component.html',
  styleUrls: ['./viewstatus.component.css']
})
export class ViewstatusComponent implements OnInit {

  acceptedenquiries:Enquiry;
  rejectedenquiries:Enquiry;
  waitingenquiries:Enquiry;
  p1:number=1;
  p2:number=1;
  p3:number=1;
  
  constructor(private enquiryservice:EnquiryService) { }

  ngOnInit() {
    this.getAcceptedEnquiriesForRep();
    this.getWaitingEnquiriesForRep();
    this.getRejectedEnquiriesForRep();
    }

  getAcceptedEnquiriesForRep():void
  {
    this.enquiryservice.getAcceptedEnquiriesForRep().subscribe(result=>{
      this.acceptedenquiries=result['acceptedenquiries'];
      });
      this.p1=1;
  }
  getWaitingEnquiriesForRep():void
  {
    this.enquiryservice.getWaitingEnquiriesForRep().subscribe(result=>{
      this.waitingenquiries=result['waitingenquiries'];
      });
      this.p2=1;
  }
  getRejectedEnquiriesForRep():void
  {
    this.enquiryservice.getRejectedEnquiriesForRep().subscribe(result=>{
      this.rejectedenquiries=result['rejectedenquiries'];
      });
      this.p3=1;
  }
}
