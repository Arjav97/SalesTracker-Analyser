import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reportrephome',
  templateUrl: './reportrephome.component.html',
  styleUrls: ['./reportrephome.component.css']
})
export class ReportrephomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout():void{
    localStorage.removeItem('currentUser');
    localStorage.removeItem('salesrep');
    this.router.navigate(['/login']);
    }
}
