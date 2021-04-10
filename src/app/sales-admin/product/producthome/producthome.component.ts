import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producthome',
  templateUrl: './producthome.component.html',
  styleUrls: ['./producthome.component.css']
})
export class ProducthomeComponent {

  constructor(private router:Router) { }

  logout():void{
    localStorage.removeItem('currentUser');
    localStorage.removeItem('salesadmin');
    this.router.navigate(['/login']);
}
}