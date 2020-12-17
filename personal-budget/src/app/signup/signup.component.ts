import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'pb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isSignedIn = false
  constructor(public firebaseService: FirebaseService, public router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn){
    this.isSignedIn = true
    this.router.navigate(['/dashboard'])
  }
    else
    this.router.navigate(['/signup'])
  }
  handleLogout(){
    this.isSignedIn = false
  }
}
