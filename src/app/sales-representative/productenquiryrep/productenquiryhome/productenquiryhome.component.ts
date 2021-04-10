import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../enquiry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productenquiryhome',
  templateUrl: './productenquiryhome.component.html',
  styleUrls: ['./productenquiryhome.component.css']
})
export class ProductenquiryhomeComponent implements OnInit {

  salesrep:string;

  constructor(private router:Router,
              private enquiryservice:EnquiryService) { }

  ngOnInit() {
    this.enquiryservice.getId(localStorage.getItem('currentUser')).subscribe(salesrep=>{
      this.salesrep=salesrep['_id'];
      
    });
  }

  logout():void{
    localStorage.removeItem("currentUser");
    localStorage.removeItem("salesrep");
    this.router.navigate(["/login"]);
  }
}
