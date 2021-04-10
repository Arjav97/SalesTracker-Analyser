import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductenquiryhomeComponent } from './productenquiryhome/productenquiryhome.component';
import { AddenquiryComponent } from './addenquiry/addenquiry.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';

const productenquiryRoutes: Routes = [
  { 
    path:'productenquiryrephome',
    component:ProductenquiryhomeComponent,
    children:[
      {
      path:'addenquiry',
      component:AddenquiryComponent
      },
      {
      path:'viewstatus',
      component:ViewstatusComponent
      },
    ]}
];


@NgModule({
  imports: [RouterModule.forChild(productenquiryRoutes)],
  exports: [RouterModule]
})
export class ProductenquiryrepRoutingModule { }
