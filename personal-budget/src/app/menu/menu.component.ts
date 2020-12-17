import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'pb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService, public router: Router) { }
  isSignedIn = false
  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }
  logout(){
    clearTimeout(this.firebaseService.timer)
    if (localStorage.getItem('user')!==null){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])
    }
}
}
