
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component'; 
import { PolicyloginComponent } from '../policylogin/policylogin.component';
 
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent } ,
  {path:"policylogin",component:PolicyloginComponent},
  {path:"login",component:LoginComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

