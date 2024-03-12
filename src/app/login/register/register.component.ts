import { Component } from '@angular/core';
import { Appuser } from 'src/app/models/appuser.model';
import { CpService } from 'src/app/cp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  appuser={
    UserName:'',
    FullName:'',
    Email:'',
    Password:'',
    CPassword:'',
  };

  
  constructor(private cpservice: CpService,private route:Router) {}
 
 
  onSubmit() {
    debugger;
    if(this.appuser.Password==this.appuser.CPassword){

    
    this.cpservice.addappuser(this.appuser)
       .subscribe(
       
        (response) => {
         if(response.message=="Success"){
          alert("New User Registered")
          this.route.navigate(['login']);
         }
         else  if(response.message!="Success"){
         alert(response.message)
         }
        }
      );
    }
    else{
      alert("Passwords Doesn't Match")
    }
  }
  }
