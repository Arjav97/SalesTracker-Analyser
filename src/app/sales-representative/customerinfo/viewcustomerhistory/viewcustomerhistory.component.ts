import { Component} from '@angular/core';
import { CustomerService } from '../customer.service';
import { Mainorder } from 'src/app/mainorder';
import { Orderdetail } from 'src/app/orderdetail';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-viewcustomerhistory',
  templateUrl: './viewcustomerhistory.component.html',
  styleUrls: ['./viewcustomerhistory.component.css']
})
export class ViewcustomerhistoryComponent {

  success:string;
  orders:Mainorder[];
  orderdetails:Orderdetail[];
  p:number=1;
  
  constructor(private customerservice:CustomerService) { }
  

  searchcustomerHistory(customer:string):void{
    this.customerservice.searchcustomerHistory(customer).subscribe(result=>{
        this.success=result['success'];
        if(this.success==='true')
        {
          this.orders=result['order'];
          this.orderdetails=result['orderdetail'];
          this.p=1;
          UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>Customer Found`,status:'success',pos:'top-center',timeout:1000});
        }
        else
        {
          UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>Customer History not Found`,status:'danger',pos:'top-center',timeout:1000});
          this.orders=[];
          this.orderdetails=[];
        }
        
    });
  }
}