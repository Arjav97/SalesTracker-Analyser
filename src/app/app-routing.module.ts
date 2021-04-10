import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';
import { ProductcatalogueComponent } from './productcatalogue/productcatalogue.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const appRoutes:Routes=[
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'productdetail/:product_id',component:ProductdetailComponent},
  {path:'productcatalogue',component:ProductcatalogueComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
 ]

@NgModule({
 
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:
    [
      RouterModule
    ]
})
export class AppRoutingModule { }
