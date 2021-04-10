import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { SalesAdminRoutingModule } from './sales-admin-routing.module';
import { FormsModule } from '@angular/forms';
import { SalesdashboardComponent } from './salesdashboard/salesdashboard.component';
import { ProductModule } from './product/product.module';
import { ProductenquiryadminModule } from './productenquiryadmin/productenquiryadmin.module';
import { ViewallsalesorderComponent } from './viewallsalesorder/viewallsalesorder.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { GenerateadminreportModule } from './generateadminreport/generateadminreport.module';

@NgModule({
  declarations: [
    SalesdashboardComponent,
    ViewallsalesorderComponent,
    
  ],
  imports: [
    NgxPaginationModule,
    FormsModule,
    CommonModule,
    ProductModule,
    ProductenquiryadminModule,
    SalesAdminRoutingModule,
    GenerateadminreportModule
  ]
})
export class SalesAdminModule { }
