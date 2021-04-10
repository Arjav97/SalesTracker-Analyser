import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductcatalogueService } from '../productcatalogue.service';
import { Product } from '../sales-admin/product/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})

export class ProductdetailComponent implements OnInit {

product:Product;
designation:string;
salesadmin:boolean=false;
salesrep:boolean=false;


  constructor(private route:ActivatedRoute,
            private productcatalogue:ProductcatalogueService,
            private router:Router) { }

  ngOnInit():void{
    this.productcatalogue.getDesignation(localStorage.getItem('currentUser')).subscribe(designation=>{
      this.designation=designation['designation'];
      if(this.designation==="Sales Admin")
      this.salesadmin=true;
      else if(this.designation==="Sales Representative")
      this.salesrep=true;
  });
    this.getProduct();
  }

  getProduct():void{
    const id= this.route.snapshot.paramMap.get('product_id');
    this.productcatalogue.getProduct(id).subscribe(result=>{
      this.product=result['product'];
    })
  }

  logout():void{
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}