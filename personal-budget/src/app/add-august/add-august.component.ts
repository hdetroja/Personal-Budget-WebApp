import { Component, OnInit } from '@angular/core';
import { AugustService } from '../services/august.service';
import { model } from '../model';

@Component({
  selector: 'pb-add-august',
  templateUrl: './add-august.component.html',
  styleUrls: ['./add-august.component.scss']
})
export class AddAugustComponent implements OnInit {
  august: model = {uID: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(private augustService: AugustService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.august.title!='' && this.august.value!=undefined){
      this.augustService.addAugust(this.august);
      this.august.title='';
      this.august.value=undefined;
    }

  }

}
