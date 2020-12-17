import { Component, OnInit } from '@angular/core';
import { DecemberService } from '../services/december.service';
import { model } from '../model';

@Component({
  selector: 'pb-add-december',
  templateUrl: './add-december.component.html',
  styleUrls: ['./add-december.component.scss']
})
export class AddDecemberComponent implements OnInit {
  december: model = {
    title:'',
    value:undefined
  }
  constructor(private decemberService: DecemberService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.december.title!='' && this.december.value!=undefined){
      this.decemberService.addDecember(this.december);
      this.december.title='';
      this.december.value=undefined;
    }

  }

}
