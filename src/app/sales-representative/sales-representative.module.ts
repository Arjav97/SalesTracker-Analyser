import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'
import { SalesRepresentativeRoutingModule } from './sales-representative-routing.module';
import { SalesrepdashboardComponent } from './salesrepdashboard/salesrepdashboard.component';
import { CustomerinfoModule } from './customerinfo/customerinfo.module';
import { ProductenquiryrepModule } from './productenquiryrep/productenquiryrep.module';
import { SalesinvoicingComponent } from './salesinvoicing/salesinvoicing.component';
import { GeneraterepreportModule } from './generaterepreport/generaterepreport.module';

@NgModule({
  declarations: [ 
     SalesrepdashboardComponent,
     SalesinvoicingComponent ],

  imports: [
    FormsModule,
    SalesRepresentativeRoutingModule,
    ProductenquiryrepModule,
    CustomerinfoModule,
    GeneraterepreportModule,
    CommonModule
  ]
})
export class SalesRepresentativeModule { 
}
