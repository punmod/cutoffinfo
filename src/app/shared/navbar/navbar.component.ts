import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
shownavbar:boolean;

  constructor(public auth:AuthService,public afauth:AngularFireAuth) {
    this.shownavbar=false;
    this.afauth.authState.subscribe((res)=>{if(res)this.shownavbar=true});
   }

  ngOnInit(): void {
  }

}
