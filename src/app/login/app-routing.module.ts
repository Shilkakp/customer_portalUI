
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component'; 
import { PolicyloginComponent } from '../policylogin/policylogin.component';
import { PolicyDetailsComponent } from '../policy-details/policy-details.component';
 
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent } ,
  {path:"policylogin",component:PolicyloginComponent},
  {path:"login",component:LoginComponent},
  {path:"policydetails",component:PolicyloginComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

