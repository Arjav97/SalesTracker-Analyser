import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ProductenquiryrepRoutingModule } from './productenquiryrep-routing.module';
import { ProductenquiryhomeComponent } from './productenquiryhome/productenquiryhome.component';
import { AddenquiryComponent } from './addenquiry/addenquiry.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';

@NgModule({
  declarations:
  [ ProductenquiryhomeComponent, 
    AddenquiryComponent, 
    ViewstatusComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    ProductenquiryrepRoutingModule
  ]
})
export class ProductenquiryrepModule { }
