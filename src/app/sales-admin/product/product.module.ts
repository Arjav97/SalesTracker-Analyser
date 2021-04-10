import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProducthomeComponent } from './producthome/producthome.component';
import { ProductentryComponent } from './productentry/productentry.component';
import { ProductquantityComponent } from './productquantity/productquantity.component';
import { UpdatepricecommissionComponent } from './updatepricecommission/updatepricecommission.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProducthomeComponent,
    ProductentryComponent,
    ProductquantityComponent,
    UpdatepricecommissionComponent
  ],
  
  imports: [
    FormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
