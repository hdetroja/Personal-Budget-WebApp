import { Component, OnInit } from '@angular/core';
import { SeptemberService } from '../services/september.service';
import { model } from '../model';

@Component({
  selector: 'pb-add-september',
  templateUrl: './add-september.component.html',
  styleUrls: ['./add-september.component.scss']
})
export class AddSeptemberComponent implements OnInit {
  september: model = {uID: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(private septemberService: SeptemberService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.september.title!='' && this.september.value!=undefined){
      this.septemberService.addSeptember(this.september);
      this.september.title='';
      this.september.value=undefined;
    }

  }

}
