import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { ProductcatalogueService } from 'src/app/productcatalogue.service';
import { Product } from 'src/app/sales-admin/product/product';
import * as UIkit from 'uikit';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-salesinvoicing',
  templateUrl: './salesinvoicing.component.html',
  styleUrls: ['./salesinvoicing.component.css']
})
export class SalesinvoicingComponent implements OnInit {

  pipe = new DatePipe('en-US');
  datestring:string;
  i:number=0;
  x:number=0;
  nettotal:string='';
  orders:Order[]=[];
  products:Product[];
  success:string;
  message:string;
 
  constructor(private router:Router,
              private orderservice:OrderService,
              private productcatalogueservice:ProductcatalogueService) { }

  ngOnInit() {
    this.getProducts();
    this.transformDate();
  }
  
  transformDate(){
   this.datestring=this.pipe.transform(new Date(),'dd-MM-yy');
  }

  getProducts():void{
    this.productcatalogueservice.getProducts().subscribe(result=>{
      this.products=result['products'];
    });
  }
  
  addOrder():void{
    let order:Order;
    order=this.orderservice.addOrder();
    this.orders.push(order);
    }
  
  updateCheckbox(order:Order,pro,qty):void
  {
      if(order.isChecked===true)
      {
          this.orderservice.checkquantity(pro,qty).subscribe(result=>{
            this.success=result['success'];
            this.message=result['message'];
            if(this.success==='true')
              {
                order.product=pro;
                order.qty=qty;
                order.price=result['price'];
                order.total=((+order.price)*(+order.qty)).toString() ;
              UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>${this.message}`,status:'success',pos:'top-center',timeout:1000});
              }
          else if(this.success==='false')
              {  
                order.product=' ';
                order.qty=' ';
                order.price=' ';
                order.total=' ';
                UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>${this.message}`,status:'danger',pos:'top-center',timeout:1000});
              }
          });
      }
      else if(order.isChecked===false)
      {
          order.product='';
          order.qty='';
          order.price='';
          order.total='';
      }
  }

  deleteOrder(order):void{
   this.orders=this.orders.filter(t =>t!==order);
  }

  NetTotal():void{
     
    for(this.i=0;this.i<this.orders.length;this.i++)
     {
        if(this.orders[this.i].isChecked)
        {
          this.x=this.x + (+this.orders[this.i].total);
        }
     }
     if(this.x>0)
     {
      this.nettotal=this.x.toString();
      this.x=0;
     }
     else
     { 
       this.nettotal='';
       UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>No order selected`,status:'danger',pos:'top-center',timeout:1000});
     }

  }

  Submit(customer:string):void{
   
    this.orderservice.submit(this.orders,customer,this.datestring,this.nettotal).subscribe(result=>{
      this.message=result['message'];
      
      if(result['success']==='true')
        {
          UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>Order Successfully Placed....`,status:'success',pos:'top-center',timeout:1000});
          this.orders=[];
        }
        else if(result['success']==='false')
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

  logout():void{
    localStorage.removeItem("currentUser");
    localStorage.removeItem("salesrep");
    this.router.navigate(["/login"]);
  }
}
