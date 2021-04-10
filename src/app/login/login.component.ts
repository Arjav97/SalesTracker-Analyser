import { Component} from '@angular/core';
import { AuthService } from '../auth.service';
import * as UIkit from 'uikit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  success:string;
  designation:string;

  constructor(private authService:AuthService,private router: Router) { }

  loginUser(username,password){

    this.authService.loginUser(username,password).subscribe(users=>{
      this.success=users['success'];
      
      if(this.success==='true')
      {
        this.designation=users['users'].designation;  
        localStorage.setItem('currentUser',users['token']);
        UIkit.notification({message: '<span uk-icon="icon:check;ratio:2"></span>Login Successful.... ', status: 'success',pos:'top-center',timeout: 1000});
        
       if(this.designation === "Sales Admin")
          this.router.navigate(['/salesdashboard']);
        else if(this.designation === "Sales Representative")
          this.router.navigate(['/salesrepdashboard',{ id: users['users']._id }]);
      }
    else 
      if(this.success==='false')
      {
        UIkit.notification({message: '<span uk-icon="icon:close;ratio:2"></span>Wrong Credentials.... ', status: 'danger',pos:'top-center',timeout: 1000});
      }

    });
  }
}