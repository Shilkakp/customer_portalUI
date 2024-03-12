import { Component } from '@angular/core';
import { CpService } from '../cp.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-policylogin',
  templateUrl: './policylogin.component.html',
  styleUrls: ['./policylogin.component.css']
})
export class PolicyloginComponent {
  logoutReasponse$!: Observable<any>;
  appuser: any;

constructor(private cpservice: CpService,private route:Router) {}

logout() {
  this.route.navigate(['login']);
}

}

     
   
  
  





