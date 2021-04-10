import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GenerateadminreportRoutingModule } from './generateadminreport-routing.module';
import { ReportadminhomeComponent } from './reportadminhome/reportadminhome.component';
import { ProductremainingadminreportComponent } from './productremainingadminreport/productremainingadminreport.component';
import { ProductconsumptionadminreportComponent } from './productconsumptionadminreport/productconsumptionadminreport.component';
import { TotalsalesadminreportComponent } from './totalsalesadminreport/totalsalesadminreport.component';
import { SalesrepadminreportComponent } from './salesrepadminreport/salesrepadminreport.component';
import { AllcustomerpurchasereportComponent } from './allcustomerpurchasereport/allcustomerpurchasereport.component';
import { SalesrepcustomeradminreportComponent } from './salesrepcustomeradminreport/salesrepcustomeradminreport.component';

@NgModule({
  declarations: [
    ReportadminhomeComponent,
    ProductremainingadminreportComponent,
    ProductconsumptionadminreportComponent,
    TotalsalesadminreportComponent,
    SalesrepadminreportComponent,
    AllcustomerpurchasereportComponent,
    SalesrepcustomeradminreportComponent
    ],
  
  imports: [
    CommonModule,
    NgxSpinnerModule,
    GenerateadminreportRoutingModule
  ]
})
export class GenerateadminreportModule { }
