import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewallenquiryComponent } from './viewallenquiry/viewallenquiry.component';
import { ProductenquiryhomeComponent } from './productenquiryhome/productenquiryhome.component';
import { AcceptedenquiryComponent } from './acceptedenquiry/acceptedenquiry.component';

const productenquiryadminroutes: Routes = [
  { 
    path:'productenquiryadminhome',
    component:ProductenquiryhomeComponent,
    children:[
      {
      path:'viewallenquiry',
      component:ViewallenquiryComponent
      },
      {
      path:'viewacceptedenquiry',
      component:AcceptedenquiryComponent
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(productenquiryadminroutes)],
  exports: [RouterModule]
})
export class ProductenquiryadminRoutingModule { 
  
}
