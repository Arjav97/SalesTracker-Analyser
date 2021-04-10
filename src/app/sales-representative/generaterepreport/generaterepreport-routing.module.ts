import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductremainingrepreportComponent } from './productremainingrepreport/productremainingrepreport.component';
import { ProductconsumptionrepreportComponent } from './productconsumptionrepreport/productconsumptionrepreport.component';
import { ReportrephomeComponent } from './reportrephome/reportrephome.component';
import { SalesrepcustomerreportComponent } from './salesrepcustomerreport/salesrepcustomerreport.component';
import { SpecificcustomerreportComponent } from './specificcustomerreport/specificcustomerreport.component';

const generaterepreportroutes: Routes = [
  { 
    path:'generaterepreport',
    component:ReportrephomeComponent,
    children:[
      {
      path:'productremainingrep',
      component:ProductremainingrepreportComponent
      },
      {
      path:'productconsumptionrep',
      component:ProductconsumptionrepreportComponent
      },
      {
        path: 'salesrepcustomer',
        component:SalesrepcustomerreportComponent
      },
      {
        path: 'specificcustomer',
        component: SpecificcustomerreportComponent
      }
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(generaterepreportroutes)],
  exports: [RouterModule]
})
export class GeneraterepreportRoutingModule { }
