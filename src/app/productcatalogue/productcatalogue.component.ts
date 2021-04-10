import { Component, OnInit } from '@angular/core';
import {ProductcatalogueService} from '../productcatalogue.service';
import { Product } from '../sales-admin/product/product';
import * as UIkit from 'uikit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcatalogue',
  templateUrl: './productcatalogue.component.html',
  styleUrls: ['./productcatalogue.component.css']
})

export class ProductcatalogueComponent implements OnInit {

  message:string;
  success:string;
  products:Product[];
  categories:string[];
  designation:string;
  salesadmin:boolean=false;
  salesrep:boolean=false;

  constructor(private productcatalogue:ProductcatalogueService,
              private router:Router) {}

  ngOnInit() {
    this.salesadmin=false;
    this.salesrep=false;
    
    this.productcatalogue.getDesignation(localStorage.getItem('currentUser')).subscribe(designation=>{
        
        this.designation=designation['designation'];
        if(this.designation==="Sales Admin")
        this.salesadmin=true;
        else if(this.designation==="Sales Representative")
        this.salesrep=true;
    });
    
    this.getProducts();
    this.getCategories();
    
    }

  getProducts():void{
    this.productcatalogue.getProducts().subscribe(result=>{
      this.message=result['message'];
      this.success=result['success'];
      this.products=result['products'];
    });
  } 
  
  getCategories():void{
      this.productcatalogue.getCategories().subscribe(result=>{
      this.categories=result['categories'];
    })
  }
 
  searchProduct(pro:string):void{
    this.productcatalogue.searchProduct(pro).subscribe(result=>{
      this.message=result['message'];
      this.success=result['success'];
      this.products=result['products'];
      
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

  searchCategory(category:string):void{
    this.productcatalogue.searchCategory(category).subscribe(result=>{
      this.message=result['message'];
      this.success=result['success'];
      this.products=result['products'];
      
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

  logout():void{
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
