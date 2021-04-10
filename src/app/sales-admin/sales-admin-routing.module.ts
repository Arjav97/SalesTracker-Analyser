import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router }  from '@angular/router';
import {SalesdashboardComponent} from './salesdashboard/salesdashboard.component';
import { ViewallsalesorderComponent } from './viewallsalesorder/viewallsalesorder.component';

const salesadminRoutes:Routes=[
  { path:'salesdashboard', component: SalesdashboardComponent } ,
  { path:'viewallsalesorder', component:ViewallsalesorderComponent}
  ];

@NgModule({
  imports: [
        RouterModule.forChild(salesadminRoutes)
     ],
  exports:[
      RouterModule
  ]
})
export class SalesAdminRoutingModule { }
