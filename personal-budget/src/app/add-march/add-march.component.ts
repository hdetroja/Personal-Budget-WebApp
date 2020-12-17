import { Component, OnInit } from '@angular/core';
import { MarchService } from '../services/march.service';
import { model } from '../model';

@Component({
  selector: 'pb-add-march',
  templateUrl: './add-march.component.html',
  styleUrls: ['./add-march.component.scss']
})
export class AddMarchComponent implements OnInit {
  march: model = {
    title:'',
    value:undefined
  }
  constructor(private marchService: MarchService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.march.title!='' && this.march.value!=undefined){
      this.marchService.addMarch(this.march);
      this.march.title='';
      this.march.value=undefined;
    }

  }

}
