import { Component, OnInit } from '@angular/core';
import { JulyService } from '../services/july.service';
import { model } from '../model';

@Component({
  selector: 'pb-add-july',
  templateUrl: './add-july.component.html',
  styleUrls: ['./add-july.component.scss']
})
export class AddJulyComponent implements OnInit {
  july: model = {uID: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(private julyService: JulyService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.july.title!='' && this.july.value!=undefined){
      this.julyService.addJuly(this.july);
      this.july.title='';
      this.july.value=undefined;
    }

  }

}
