import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/sales-representative/customerinfo/customer.service';
import { Mainorder } from 'src/app/mainorder';
import { Orderdetail } from 'src/app/orderdetail';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-viewallsalesorder',
  templateUrl: './viewallsalesorder.component.html',
  styleUrls: ['./viewallsalesorder.component.css']
})
export class ViewallsalesorderComponent implements OnInit {

  success:string;
  message:string;
  orders:Mainorder[];
  filteredorders:Mainorder[];
  orderdetails:Orderdetail[];
  p:number=1;

  constructor(private customerservice:CustomerService,
              private router:Router) { }

  ngOnInit() {
    this.viewallcustomerorders();
  }

  viewallcustomerordersbyrep(salesrep:string):void{
    this.customerservice.viewallcustomerordersforAdminbyRep(salesrep).subscribe(result=>{
      this.success=result['success'];
      this.message=result['message'];
      if(this.success==='true')
      {
        this.orders=result['order'];
        this.orderdetails=result['orderdetail'];
        this.p=1;
        UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>Customer Orders Found`,status:'success',pos:'top-center',timeout:1000});
      }
      else
      {
        UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>${this.message}`,status:'danger',pos:'top-center',timeout:1000});
        this.orders=[];
        this.orderdetails=[];
      }
      
    });
  }
  

  viewallcustomerorders():void{
    this.customerservice.viewallcustomerordersforAdmin().subscribe(result=>{
        this.success=result['success'];
        if(this.success==='true')
        {
          this.orders=result['order'];
          this.orderdetails=result['orderdetail'];
          this.p=1;
          UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>Customer Orders Found`,status:'success',pos:'top-center',timeout:1000});
        }
        else
        {
          UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>No Customer Orders Found`,status:'danger',pos:'top-center',timeout:1000});
          this.orders=[];
          this.orderdetails=[];
        }
        
    });
  }

  filterordersbydate(date1,date2){
    
    if(date1=="" || date2=="")
    {
      UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>Missing dates`,status:'danger',pos:'top-center',timeout:1000});
    }
    else
    {
      let date1f=new Date(date1);
      let date2f=new Date(date2);
      this.customerservice.filterordersbydates(new Date(date1f.getFullYear(),date1f.getMonth(),date1f.getDate(),0,0,0).toString(),new Date(date2f.getFullYear(),date2f.getMonth(),date2f.getDate(),24,0,0).toString()).subscribe(result=>{

        this.success=result['success'];
          
        if(this.success==='true')
          {
            this.orders=result['order'];
            this.orderdetails=result['orderdetail'];
            this.p=1;
            UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>Filtered Orders Found`,status:'success',pos:'top-center',timeout:1000});
          }
          else if(this.success==='false')
          {
            this.orders=[];
            this.orderdetails=[];
            UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>No Orders Found Between these Dates`,status:'danger',pos:'top-center',timeout:1000});
          } 
        });
    } 
  }


  logout():void{
    localStorage.removeItem('currentUser');
    localStorage.removeItem('salesadmin');
    this.router.navigate(['/login']);
}

}
