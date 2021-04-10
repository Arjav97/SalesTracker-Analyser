import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductenquiryadminRoutingModule } from './productenquiryadmin-routing.module';
import { ViewallenquiryComponent } from './viewallenquiry/viewallenquiry.component';
import { AcceptedenquiryComponent } from './acceptedenquiry/acceptedenquiry.component';
import { ProductenquiryhomeComponent } from './productenquiryhome/productenquiryhome.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    ViewallenquiryComponent, 
    AcceptedenquiryComponent, 
    ProductenquiryhomeComponent
    ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    ProductenquiryadminRoutingModule
  ]
})
export class ProductenquiryadminModule { }
