import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './login/app-routing.module'; 
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component'; 
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './login/register/register.component'; 
import { FormsModule } from '@angular/forms';
import { PolicyHolderComponent } from './policy-holder/policy-holder.component';
import { PolicyloginComponent } from './policylogin/policylogin.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AddPolicyComponent } from './add-policy/add-policy.component';
import { RemovePolicyComponent } from './remove-policy/remove-policy.component';
import { CoverageDetailsComponent } from './coverage-details/coverage-details.component';
import { InstallmentDetailsComponent } from './installment-details/installment-details.component';

 
@NgModule({ 
  declarations: [ 
    AppComponent, 
    LoginComponent, 
    RegisterComponent,PolicyHolderComponent, PolicyloginComponent, PolicyDetailsComponent, VehicleDetailsComponent, AddPolicyComponent, RemovePolicyComponent, CoverageDetailsComponent, InstallmentDetailsComponent,
  ], 
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    RouterModule.forRoot([]),
    HttpClientModule,
    FormsModule,
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { }
