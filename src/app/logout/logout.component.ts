import { Component } from '@angular/core';
import { CpService } from '../cp.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  CpService: any;
    route: any;
 
  constructor(private logoutService: CpService,private router:Router) { }
 
  logout() {
    this.logoutService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    },
    error =>{
        console.error('logout error',error);
    }
    );
  }
}
