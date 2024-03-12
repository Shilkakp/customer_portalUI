import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appuser } from './models/appuser.model';
 
@Injectable({
  providedIn: 'root'
})
export class CpService {
baseUrl = 'https://localhost:7148/api/appuser';
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
    
}
