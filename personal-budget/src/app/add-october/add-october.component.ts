import { Component, OnInit } from '@angular/core';
import { OctoberService } from '../services/october.service';
import { model } from '../model';

@Component({
  selector: 'pb-add-october',
  templateUrl: './add-october.component.html',
  styleUrls: ['./add-october.component.scss']
})
export class AddOctoberComponent implements OnInit {
  october: model = {uID: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(private octoberService: OctoberService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.october.title!='' && this.october.value!=undefined){
      this.octoberService.addOctober(this.october);
      this.october.title='';
      this.october.value=undefined;
    }

  }

}
