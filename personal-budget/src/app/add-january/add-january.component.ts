import { Component, OnInit } from '@angular/core';
import { JanuaryService } from '../services/january.service';
import { model } from '../model';

@Component({
  selector: 'pb-add-january',
  templateUrl: './add-january.component.html',
  styleUrls: ['./add-january.component.scss']
})
export class AddJanuaryComponent implements OnInit {
  january: model = {
    uID: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(private januaryService: JanuaryService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.january.title!='' && this.january.value!=undefined){
      this.januaryService.addJanuary(this.january);
      this.january.title='';
      this.january.value=undefined;
    }

  }

}
