import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { ViewallcustomerComponent } from './viewallcustomer/viewallcustomer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ViewcustomerhistoryComponent } from './viewcustomerhistory/viewcustomerhistory.component';
import { ViewallcustomersorderComponent } from './viewallcustomersorder/viewallcustomersorder.component';

const customerRoutes: Routes = [
  { 
    path:'customerhome',
    component:CustomerhomeComponent,
    children:[
      {
      path:'addcustomer',
      component:AddcustomerComponent
      },
      {
      path:'viewallcustomer',
      component:ViewallcustomerComponent
      },
      {
      path:'viewcustomerhistory',
      component:ViewcustomerhistoryComponent
      },
      {
        path:'viewallcustomersorder',
        component:ViewallcustomersorderComponent
      }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerinfoRoutingModule { }
