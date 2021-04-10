import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../customer.service';


@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})

export class CustomerhomeComponent implements OnInit {

  salesrep:string;

  constructor(private router:Router,
              private customerservice:CustomerService) { }

  ngOnInit() {
    this.customerservice.getId(localStorage.getItem('currentUser')).subscribe(salesrep=>{
      this.salesrep=salesrep['_id'];
      });
  }

  logout():void{
    localStorage.removeItem("currentUser");
    localStorage.removeItem("salesrep");
    this.router.navigate(["/login"]);
  }

}
