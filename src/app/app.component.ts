import { Component, OnInit } from '@angular/core';
import { CpService } from './cp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customerportal';
  cp: any[] = [];
}