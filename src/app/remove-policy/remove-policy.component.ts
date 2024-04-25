import { Component } from '@angular/core';
import { CpService } from '../cp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-policy',
  templateUrl: './remove-policy.component.html',
  styleUrls: ['./remove-policy.component.css']
})
export class RemovePolicyComponent {
  CpService: any;
  route: any;
  policyNumber: string ='';


constructor(private RemovePolicyService: CpService,private router:Router) { }

RemovePolicy() {
  this.RemovePolicyService.RemovePolicy({policyNumber:this.policyNumber}).subscribe(() => {
    this.router.navigate(['/policylogin']);
  },
  error =>{
      console.error('error',error);
    });
  }
}