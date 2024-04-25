import { Component } from '@angular/core';
import { CpService } from '../cp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent {
  CpService: any;
  route: any;
  policyNumber: string ='';
  chasisNumber: string = '';
constructor(private AddPolicyService: CpService,private router:Router) { }

 AddPolicy() {
  this.AddPolicyService.AddPolicy({policyNumber:this.policyNumber,chasisNumber:this.chasisNumber}).subscribe(() => {
    this.router.navigate(['/policylogin']);
  },
  error =>{
      console.error('error',error);
  }
  );
}
}
