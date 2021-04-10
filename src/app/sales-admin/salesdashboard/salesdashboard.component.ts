import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AdmindashboardService } from '../admindashboard.service';

@Component({
  selector: 'app-salesdashboard',
  templateUrl: './salesdashboard.component.html',
  styleUrls: ['./salesdashboard.component.css']
})
export class SalesdashboardComponent  {

  id:string;
  constructor(private router:Router,
             private admindashboardservice:AdmindashboardService){}
  
  ngOnInit() {
    
    // regarding getting salesadmin username
    this.admindashboardservice.testing().subscribe();
    
    this.admindashboardservice.getId(localStorage.getItem('currentUser')).subscribe(token=>{
        this.id=token['_id'];
        localStorage.setItem('salesadmin',this.id);
    });
   
  
  }
       

  logout():void{
    localStorage.removeItem('currentUser');
    localStorage.removeItem('salesadmin');
    this.router.navigate(['/login']);
  }

}
