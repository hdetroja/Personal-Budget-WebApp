import { Component, OnInit } from '@angular/core';
import { MayService } from '../services/may.service';
import { model } from '../model';

@Component({
  selector: 'pb-add-may',
  templateUrl: './add-may.component.html',
  styleUrls: ['./add-may.component.scss']
})
export class AddMayComponent implements OnInit {
  may: model = {uID: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(private mayService: MayService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.may.title!='' && this.may.value!=undefined){
      this.mayService.addMay(this.may);
      this.may.title='';
      this.may.value=undefined;
    }

  }

}
