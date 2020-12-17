import { Component, OnInit } from '@angular/core';
import { AprilService } from '../services/april.service';
import { model } from '../model';

@Component({
  selector: 'pb-add-april',
  templateUrl: './add-april.component.html',
  styleUrls: ['./add-april.component.scss']
})
export class AddAprilComponent implements OnInit {
  april: model = {
    title:'',
    value:undefined
  }
  constructor(private aprilService: AprilService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.april.title!='' && this.april.value!=undefined){
      this.aprilService.addApril(this.april);
      this.april.title='';
      this.april.value=undefined;
    }

  }

}
