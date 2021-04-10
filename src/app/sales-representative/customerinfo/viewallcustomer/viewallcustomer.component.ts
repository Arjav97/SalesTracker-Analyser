import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import * as UIkit from 'uikit';
import { DatePipe } from '@angular/common';
import { Customer } from '../customer';
import { Followup } from '../followup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallcustomer',
  templateUrl: './viewallcustomer.component.html',
  styleUrls: ['./viewallcustomer.component.css']
})
export class ViewallcustomerComponent implements OnInit {

  pipe = new DatePipe('en-US');
  followups:Followup[];
  success:string;
  message:string;
  p:number=1;
  flag:string;
  datestring:string;
  
  constructor(private customerservice:CustomerService,
              private router:Router) { }

  ngOnInit() {
    this.transformDate();
  }

transformDate():void
  {
    this.datestring=this.pipe.transform(new Date(),'dd-MM-yy');
  }

  showallFollowUps(cust:string):void{
    this.flag="showall";

    this.customerservice.showallFollowUps(cust).subscribe(result=>{
     
      this.message=result['message'];
      this.success=result['success'];
      
      
      if(this.success==='false')
      {
        this.followups=[];
       
        if(this.message=='Not registered customer')
        {
          UIkit.modal('#notregisteredcustomer').show();
        }
        else
        {
          UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>${this.message}`,status:'danger',pos:'top-center',timeout: 1000});
        }
      
      }
      else if(this.success==='true')
      {
        this.p=1;
        this.followups=result['followups'];
        UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>${this.message}`,status:'success',pos:'top-center',timeout: 1000})
      }
    });
  }

  searchCustomerFollowUp(cust:string):void{
    
    this.flag="search";

    this.customerservice.searchCustomerFollowUp(cust).subscribe(result=>{
     
      this.message=result['message'];
      this.success=result['success'];
      
      if(this.success==='false')
      {
        this.followups=[];
        
        if(this.message=='Not registered customer')
        {
          UIkit.modal('#notregisteredcustomer').show();
        }
        else
        {
          UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>${this.message}`,status:'danger',pos:'top-center',timeout: 1000});
        }
        
      }
      else
      {
        this.p=1;
        this.followups=result['followup'];
        UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>${this.message}`,status:'success',pos:'top-center',timeout: 1000});
      }
    });
  }

  removeFollowUp(followup:Followup):void{
    this.followups=this.followups.filter(f=>f!==followup);
    this.customerservice.removeFollowUp(followup).subscribe(result=>{
      
      this.success=result['success'];
      if(this.success=="true")
      {
        UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>${result['message']}`,status:'success',pos:'top-center',timeout: 1000});
      }
    });
  }

  addnewFollowUp(email:string,desc:string):void{
    this.flag="newfollowup";

    this.customerservice.addnewFollowUp(email,desc,this.datestring).subscribe(result=>{
      this.message=result['message'];
      this.success=result['success'];
     
      if(this.success=='true')
      {
        UIkit.modal('#newfollowup').hide();
        UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>${result['message']}`,status:'success',pos:'top-center',timeout: 1000});
      }
      else if(this.success=='false')
      {
        if(this.message=='Not registered customer')
        {
          UIkit.modal('#notregisteredcustomer').show();
        }
        else
        {
          UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>${this.message}`,status:'danger',pos:'top-center',timeout: 1000});
        }
      }

    });
  }
}

