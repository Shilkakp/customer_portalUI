import { Component } from '@angular/core';
import { Appuser } from '../models/appuser.model';
import { CpService } from '../cp.service';
import {  Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    appuser={
      UserName:'',
      Password:'',
    };
 
  constructor(private cpservice: CpService,private  route:Router) { }
 
  Register() {
  this.route.navigate(['register']);
 }

  onSubmit() {
    debugger;
    this.cpservice.login(this.appuser)
       .subscribe(
        (response) => {
          if(response.message=="Success"){
           alert("Welcome"+" "+ this.appuser.UserName +",to Policy Screen")
           this.route.navigate(['policylogin']);
          }
          else  if(response.message!="Success"){
          alert(response.message)
          }
         }
       );
        }
      }
    
