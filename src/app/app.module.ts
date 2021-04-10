import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule} from './app-routing.module';
import { SalesAdminModule} from './sales-admin/sales-admin.module';
import { ProductcatalogueComponent } from './productcatalogue/productcatalogue.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { SalesRepresentativeModule } from './sales-representative/sales-representative.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductcatalogueComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SalesRepresentativeModule,
    SalesAdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  title='Sales Project'
}
