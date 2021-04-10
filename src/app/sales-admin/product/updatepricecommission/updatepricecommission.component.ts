import { Component,OnInit} from '@angular/core';
import {ProductoperationService} from '../productoperation.service';
import * as UIkit from 'uikit';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updatepricecommission',
  templateUrl: './updatepricecommission.component.html',
  styleUrls: ['./updatepricecommission.component.css']
})
export class UpdatepricecommissionComponent implements OnInit {
  message:string;
  success:string;
  x:string;
  
  constructor(private productOperation:ProductoperationService,
    private route:ActivatedRoute) { }

  ngOnInit(){
    this.x=this.route.snapshot.params['id'];
    if(this.x){}
    else
    {
      this.x='';
    }
  }
  
  updateProduct(id,price,comm):void{

    this.productOperation.updateProduct(id,price,comm).subscribe(product=>{
      this.message=product["message"];
      this.success=product["success"];
      if(this.success==="false")
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
