import { Component, OnInit } from '@angular/core';
import { JuneService } from '../services/june.service';
import { model } from '../model';

@Component({
  selector: 'pb-add-june',
  templateUrl: './add-june.component.html',
  styleUrls: ['./add-june.component.scss']
})
export class AddJuneComponent implements OnInit {
  june: model = {
    title:'',
    value:undefined
  }
  constructor(private juneService: JuneService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.june.title!='' && this.june.value!=undefined){
      this.juneService.addJune(this.june);
      this.june.title='';
      this.june.value=undefined;
    }

  }

}
