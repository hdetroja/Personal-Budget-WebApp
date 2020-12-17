import { Component, OnInit } from '@angular/core';
import { NovemberService } from '../services/november.service';
import { model } from '../model';

@Component({
  selector: 'pb-add-november',
  templateUrl: './add-november.component.html',
  styleUrls: ['./add-november.component.scss']
})
export class AddNovemberComponent implements OnInit {
  november: model = {uID: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(private novemberService: NovemberService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.november.title!='' && this.november.value!=undefined){
      this.novemberService.addNovember(this.november);
      this.november.title='';
      this.november.value=undefined;
    }

  }

}
