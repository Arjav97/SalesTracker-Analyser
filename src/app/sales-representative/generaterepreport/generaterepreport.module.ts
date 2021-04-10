import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GeneraterepreportRoutingModule } from './generaterepreport-routing.module';
import { ProductremainingrepreportComponent } from './productremainingrepreport/productremainingrepreport.component';
import { ProductconsumptionrepreportComponent } from './productconsumptionrepreport/productconsumptionrepreport.component';
import { ReportrephomeComponent } from './reportrephome/reportrephome.component';
import { SalesrepcustomerreportComponent } from './salesrepcustomerreport/salesrepcustomerreport.component';
import { SpecificcustomerreportComponent } from './specificcustomerreport/specificcustomerreport.component';

@NgModule({
  declarations: [
    ProductremainingrepreportComponent, 
    ProductconsumptionrepreportComponent, 
    ReportrephomeComponent, 
    SalesrepcustomerreportComponent,
    SpecificcustomerreportComponent
    ],
    
  imports: [
    CommonModule,
    NgxSpinnerModule,
    GeneraterepreportRoutingModule
  ]
})
export class GeneraterepreportModule { }
