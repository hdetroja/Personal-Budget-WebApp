import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSignedIn = false
  error = {name: '', message: ''};
  constructor(public firebaseService: FirebaseService, public router: Router) {
  }

  ngOnInit() {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn){
    this.isSignedIn = true
    this.router.navigate(['/dashboard'])
  }
    else
    {this.error = this.firebaseService.error
      //console.log(this.error);
    this.router.navigate(['/login'])
    }
}
handleLogout(){
  this.isSignedIn = false
}
}
