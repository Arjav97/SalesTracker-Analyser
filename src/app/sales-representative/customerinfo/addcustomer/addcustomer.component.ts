import { Component,OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Followup } from '../followup';
import { ActivatedRoute } from '@angular/router';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})

export class AddcustomerComponent implements OnInit {

  pipe = new DatePipe('en-US');
  datestring:string;
  customer:Customer;
  followup:Followup;
  success:string;
  message:string;
  x:string;

  ngOnInit(){
    this.transformDate();

    this.x=this.route.snapshot.params['email'];
    if(this.x){}
    else
    {
      this.x='';
    }
  }

  transformDate():void
  {
    this.datestring=this.pipe.transform(new Date(),'dd-MM-yy');
  }

  constructor(private customerservice:CustomerService,
              private route:ActivatedRoute) { }
  
  AddCustomer(email,name,desc):void{
    
    this.customerservice.AddCustomer(email,name,desc,new Date(),this.datestring).subscribe(result=>{
     
      this.success=result['success'];
      this.message=result['message'];
      this.customer=result['customer'];
      this.followup=result['followup'];
      
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
