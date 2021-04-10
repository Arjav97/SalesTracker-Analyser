import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportadminhome',
  templateUrl: './reportadminhome.component.html',
  styleUrls: ['./reportadminhome.component.css']
})
export class ReportadminhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout():void{
    localStorage.removeItem('currentUser');
    localStorage.removeItem('salesadmin');
    this.router.navigate(['/login']);
    }

}