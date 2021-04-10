import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesrepService } from '../salesrep.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-salesrepdashboard',
  templateUrl: './salesrepdashboard.component.html',
  styleUrls: ['./salesrepdashboard.component.css']
})
export class SalesrepdashboardComponent implements OnInit {

  id:string;
  today=new Date();
  
  
  constructor(private route:ActivatedRoute,
    private salesrepservice:SalesrepService,
    private router:Router) { }

  ngOnInit() {
       this.salesrepservice.getId(localStorage.getItem('currentUser')).subscribe(token=>{
        this.id=token['_id'];
        localStorage.setItem('salesrep',this.id);
      });
    }

 logout():void{
    localStorage.removeItem('currentUser');
    localStorage.removeItem('salesrep');
    this.router.navigate(['/login']);
  } 
}
