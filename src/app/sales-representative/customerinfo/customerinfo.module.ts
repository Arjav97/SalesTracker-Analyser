import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerinfoRoutingModule } from './customerinfo-routing.module';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ViewallcustomerComponent } from './viewallcustomer/viewallcustomer.component';
import { ViewcustomerhistoryComponent } from './viewcustomerhistory/viewcustomerhistory.component';
import { ViewallcustomersorderComponent } from './viewallcustomersorder/viewallcustomersorder.component';
import { NgxPaginationModule } from 'ngx-pagination'; 

@NgModule({
  declarations: [
    CustomerhomeComponent,
    AddcustomerComponent,
    ViewallcustomerComponent,
    ViewcustomerhistoryComponent,
    ViewallcustomersorderComponent
    ],
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    CustomerinfoRoutingModule
  ]
})
export class CustomerinfoModule { }

