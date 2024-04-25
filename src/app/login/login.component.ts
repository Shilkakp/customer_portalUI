import { Component } from '@angular/core';
import { Appuser } from '../models/appuser.model';
import { CpService } from '../cp.service';
import {  Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  appuser = { UserName: '', Password: '' };
  showSuccessAlert = false;
  showErrorAlert = false;
  constructor(private cpservice: CpService, private route: Router) {}
 
  Register() {
    this.route.navigate(['register']);
  }
 
  onSubmit() {
    this.cpservice.login(this.appuser)
        .subscribe(
            (response) => {
                if (response.message === "Success") {
                    localStorage.setItem("userid", response.userid);
                    this.route.navigate(['policylogin'], { state: { UserName: this.appuser } });
                    // 
                    setTimeout(() => {
                      this.showSuccessAlert = true; 
                  }, 4000);
                    setTimeout(() => {
                        this.showSuccessAlert = false; 
                    }, 4000);
                }
            },
            (error) => {
                this.showErrorAlert = true;
                
            }
        );
}
}
