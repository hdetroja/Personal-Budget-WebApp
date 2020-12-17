import { Component,Output, EventEmitter, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService, public router: Router) {
   }
  ngOnInit() {
    this.firebaseService.timer = setTimeout(() => {
      if (confirm('Click OK to be logged in or Click Cancel to be logged out in 20 sec')){
        location.reload();
      }
      else{
        setTimeout(() => {
        this.firebaseService.logout()
        this.isLogout.emit()
        this.router.navigate([''])
      }, 20000);
      }
    }, 40000);
  }
onSubmit(m: string){
  m=m.toLowerCase()
  this.router.navigate([m])
}
}
