import { Component,OnInit } from '@angular/core';
import { CpService } from '../cp.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-policylogin',
  templateUrl: './policylogin.component.html',
  styleUrls: ['./policylogin.component.css'],
})
export class PolicyloginComponent implements OnInit {
  appuser: any;
  selectedPolicy: any;
  policies: any[] = [];
  showAddPolicyForm: boolean = false;
  policyinput: any = { policyNumber: '', chasisNumber: '' };
  policyNumber: string ='';
  policyDetails: any;
  errorMessage: string='';
  policyDetailsflag:boolean=false;
  policyHolderflag: boolean=false;
  coverageflag:boolean=false;
  policyHolder : any;
  coverageDetail: any;
  coverageDescription:string='';
  vehicleDetails :any;
  vehicleflag:boolean=false;

 
 
  constructor(private cpService: CpService, private  route:Router ,private http: HttpClient) { }  

  ngOnInit(): void {
    this.appuser = history.state.UserName;
    this.fetchPolicies();
  }


  logout(): void {
    this.route.navigate(['login']);
  }

  fetchPolicies(): void {
    debugger  
    this.cpService.getPolicies().subscribe(
      (policies: any[]) => {
        console.log(policies)
        this.policies = policies;
       // if (this.policies.length>0){
        //  this.selectedPolicy=this.policies[0];
          
       // }
      },
      (error: any) => {
        console.error('Error fetching policies:', error);
      }
    );
  }


  loadPolicyDetails(policyNumber: string): void {
    this.cpService.getPolicyDetails(policyNumber).subscribe(
      (details: any) => {
        this.policyinput = details;
      },
      (error: any) => {
        console.error('Error fetching policy details:', error);
      }
    );
  }


  
  onPolicySelect(event: any): void {
    const selectedPolicyNumber = event.target.value;
    this.loadPolicyDetails(selectedPolicyNumber);
         alert("Kindly add your policy to view details.")


  }



  AddPolicy(): void {
    this.showAddPolicyForm = true;
  }
 

  RemovePolicy(): void {
    debugger
    const policyNumber = this.selectedPolicy.policyNumber; 
    this.cpService.RemovePolicy({policyNumber}).subscribe(
      (response) => {
        console.log(response.Message);
        this.fetchPolicies();
        this.selectedPolicy = null;
      },
      (error) => {
        console.error(error);
      }
    );
  }


  PolicyHolderComponent() {

    this.http.get<any>(`https://localhost:7148/api/Appuser/PolicyHolder?PolicyNumber=${this.selectedPolicy}`).subscribe(
      (data) => {
        this.policyHolder = data;
        this.errorMessage = '';
        console.log(data);
      },
      error => {
        console.error('error',error);
        this.policyHolder = null;
        this.errorMessage = error.error.message;
      }
    );
    this.policyHolderflag=true;
  }
 

 


  PolicyDetailsComponent() {
    debugger
    this.http.get<any>(`https://localhost:7148/api/Appuser/PolicyDetails?policyNumber=${this.selectedPolicy}`).subscribe(
      (data) => {
        this.policyDetails = data;
        this.errorMessage = '';
      },
      error => {
        this.policyDetails = null;
        this.errorMessage = error.error.message;
      }
    );
    this.policyDetailsflag=true;
  }






  CoverageDetailsComponent(){
  debugger
    this.http.get<any>(`https://localhost:7148/api/Appuser/GetCoverages?PolicyNumber=${this.selectedPolicy}`).subscribe(
      (data) => {
        this.coverageDetail = data;
        this.errorMessage = '';
      },
      error => {
        this.coverageDetail = null;
        this.errorMessage = error.error.message;
        console.error("data",error);
      }
    );
    this.coverageflag=true;
  }


  


  VehicleDetailsComponent() {
    debugger
    this.http.get<any>(`https://localhost:7148/api/Appuser/VehicleDetails?policyNumber=${this.selectedPolicy}`).subscribe(
      (data) => {
        this.vehicleDetails = data;
        this.errorMessage = ''; 
      },
      error => {
        this.vehicleDetails = null;
        this.errorMessage = error.error.message;
      }
    );
    this.vehicleflag=true;
  }


  



  onSubmit() {
    debugger;
    this.cpService.AddPolicy(this.policyinput)
       .subscribe(
        (response) => { 
          console.log(response)
          if(response.message=="Success"){
            localStorage.setItem("userid",response.userid)
            alert("Policy Added Successfullly ")
          }
          else  if(response.message!="Success"){
          alert(response.message)
          }
         }
       );
        }
      }
    
  