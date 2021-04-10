import { Component } from '@angular/core';
import * as uuid from 'uuid/v4';
import {ProductoperationService} from '../productoperation.service';
import {Product} from '../product';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent {

  message:string;
  success:string;

  constructor(private productOperation:ProductoperationService) { }

  addProduct(name,spec,category,qty,price,comm):void {   
    let _id=uuid();  

    this.productOperation.addProduct({_id,name,spec,category,qty,price,comm} as Product).subscribe(product=>{
      this.message=product['message'];
      this.success=product['success'];
      if(this.success==="false"){
        UIkit.notification({message:`<span uk-icon="icon:close;ratio:2"></span>${this.message}`,status:'danger',pos:'top-center',timeout: 1000});
      }
      else{
        UIkit.notification({message:`<span uk-icon="icon:check;ratio:2"></span>${this.message}`,status:'success',pos:'top-center',timeout: 1000});
      }
    });
  }
}
