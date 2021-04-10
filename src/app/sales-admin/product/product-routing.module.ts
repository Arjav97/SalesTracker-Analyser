import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProducthomeComponent } from './producthome/producthome.component';
import { ProductentryComponent } from './productentry/productentry.component';
import { ProductquantityComponent } from './productquantity/productquantity.component';
import { UpdatepricecommissionComponent } from './updatepricecommission/updatepricecommission.component';

const productRoutes: Routes = [
  {   
      path:'producthome', 
      component: ProducthomeComponent,
      children:[
        {
      path:'productentry',
      component:ProductentryComponent
        },
        {
      path: 'productquantity',
      component:ProductquantityComponent
        },
        {
        path: 'updatepricecommission',
        component:UpdatepricecommissionComponent
        }
      ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }