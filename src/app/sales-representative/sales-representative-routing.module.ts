import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesrepdashboardComponent } from './salesrepdashboard/salesrepdashboard.component';
import { SalesinvoicingComponent } from './salesinvoicing/salesinvoicing.component';

const salesReproutes: Routes = [
  { path:'salesrepdashboard', component : SalesrepdashboardComponent} ,
  { path:'salesinvoicing', component : SalesinvoicingComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(salesReproutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SalesRepresentativeRoutingModule { }

