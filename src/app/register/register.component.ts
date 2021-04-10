import { Component} from '@angular/core';
import {User} from '../user';
import { AuthService } from '../auth.service';
import * as UIkit from 'uikit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  user:User;
  message:string;
  success:string;
  constructor(private authService:AuthService,private router: Router){}

  registerUser(email,name,gender,designation,password):void{
    
    let _id=email;
    
    this.authService.registerUser({_id,name,gender,designation,password} as User).subscribe(users=>{
      this.message=users['message'];
      this.success=users['success'];
          if(this.success==="false"){
            if(this.message==="Unsuccessful")
            UIkit.notification({message:'<span uk-icon="icon:close;ratio:2"></span>Registration Unsuccessful.... ',status:'danger',pos:'top-center',timeout: 1000});
            else
            UIkit.notification({message:'<span uk-icon="icon:close;ratio:2"></span>Email Already Exists.... ',status:'danger',pos:'top-center',timeout: 1000});
          }
          else
          {
            this.router.navigate(['/login']);
            UIkit.notification({message:'<span uk-icon="icon:check;ratio:2"></span>Registration successful.... ',status:'success',pos:'top-center',timeout: 1000});
          }
     });
  }
 
}
