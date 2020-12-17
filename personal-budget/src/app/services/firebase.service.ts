import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public timer: any;
  showErrorMessage = false;
  isLoggedIn = false;
  error: {name: string, message: string} = {name: '', message: ''};
  constructor(public firebaseAuth: AngularFireAuth, private router: Router) { }
  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
      localStorage.setItem('userid',JSON.stringify(res.user?.uid))
      localStorage.setItem('log','true')
    }).catch(_error =>
      {
        this.error=_error
      });
  }
  async signup(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
      localStorage.setItem('userid',JSON.stringify(res.user?.uid))
      localStorage.setItem('log','true')
    }).catch(_error =>
      {
        this.error=_error
      });
  }
  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('userid');
    localStorage.removeItem('log');
  }
}
