import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productenquiryhome',
  templateUrl: './productenquiryhome.component.html',
  styleUrls: ['./productenquiryhome.component.css']
})
export class ProductenquiryhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout():void{
    localStorage.removeItem("currentUser");
    localStorage.removeItem("salesadmin");
    this.router.navigate(["/login"]);
  }
}
