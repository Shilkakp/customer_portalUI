import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appuser } from './models/appuser.model';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
 
@Injectable({
  providedIn: 'root'
})
 export class CpService {
  private baseUrl = 'https://localhost:7148/api/Appuser';
  constructor(private http: HttpClient) {}
  // Get all users
  getAllCp(): Observable<Appuser[]> {
    return this.http.get<Appuser[]>(this.baseUrl);
  }
 
  // Add user
  addappuser(appuser: any): Observable<any> {
  const sentData= {
  userName: appuser.UserName,
  password: appuser.Password,
  fullName:appuser.FullName ,
  email: appuser.Email,
}

return this.http.post<Appuser>("https://localhost:7148/api/Appuser/Adduser", sentData);
  }
  login(appuser: any): Observable<any> {
    debugger
    const sentData= {
      userName: appuser.UserName,
      password: appuser.Password,
      fullName:appuser.FullName ,
      email: appuser.Email,
    }
    return this.http.post<Appuser>("https://localhost:7148/api/Appuser/Authenticate", sentData);
      }
      
 
      logout(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/logout`, {});
      }
     
     // Add Policy
     AddPolicy(policyNumber:any,chasisNumber:any): Observable<any> {
      debugger
      const sentData= {
        userId:localStorage.getItem("userid"),
        PolicyNumber: policyNumber,
        ChasisNumber: chasisNumber,
      }
  return this.http.post<Appuser>("https://localhost:7148/api/Appuser/AddPolicy",sentData );
    }
 
  // Remove Policy
  RemovePolicy(userpolicylist:any): Observable<any> {
    debugger
    const sentData= {
      userId:localStorage.getItem("userid"),
      policyNumber: userpolicylist.policyNumber,
    }
  return this.http.post<Appuser>("https://localhost:7148/api/Appuser/RemovePolicy",sentData );
  }



  getPolicies(): Observable<any[]>{
   var userid=localStorage.getItem("userid")
    return this.http.get<any>(`${this.baseUrl}/getpolicies/`+userid);
    
  }

  

 getPolicyDetails(policyNumber: string): Observable<any> {
   return this.http.get<any>(`${this.baseUrl}/GetPolicyDetails/${policyNumber}`);
    
  }
 

      getPolicyHolderDetails(policyNumber: string): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/PolicyHolderDetails?PolicyNumber/${policyNumber}`);
      }

  
      
          vehicleDetails(): Observable<any> {
          return this.http.get<any>(`${this.baseUrl}/vehicleDetails`, {});
      }


}
  
 











      
        

    

