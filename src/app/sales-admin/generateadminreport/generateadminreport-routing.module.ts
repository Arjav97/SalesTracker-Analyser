import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportadminhomeComponent } from './reportadminhome/reportadminhome.component';
import { ProductremainingadminreportComponent } from './productremainingadminreport/productremainingadminreport.component';
import { ProductconsumptionadminreportComponent } from './productconsumptionadminreport/productconsumptionadminreport.component';
import { TotalsalesadminreportComponent } from './totalsalesadminreport/totalsalesadminreport.component';
import { SalesrepadminreportComponent } from './salesrepadminreport/salesrepadminreport.component';
import { AllcustomerpurchasereportComponent } from './allcustomerpurchasereport/allcustomerpurchasereport.component';
import { SalesrepcustomeradminreportComponent } from './salesrepcustomeradminreport/salesrepcustomeradminreport.component';


const generateadminreportroutes: Routes = [
  { 
    path:'generateadminreport',
    component:ReportadminhomeComponent,
    children:[
      {
      path:'productremainingadmin',
      component:ProductremainingadminreportComponent
      },
      {
      path:'productconsumptionadmin',
      component:ProductconsumptionadminreportComponent
      },
      {
        path:'totalsalesadmin',
        component:TotalsalesadminreportComponent
      },
      {
        path:'salesrepadmin',
        component:SalesrepadminreportComponent
      },
      {
        path:'allcustomerpurchase',
        component:AllcustomerpurchasereportComponent
      },
      {
        path:'salesrepcustomeradmin',
        component:SalesrepcustomeradminreportComponent
      }
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(generateadminreportroutes)],
  exports: [RouterModule]
})
export class GenerateadminreportRoutingModule { }
