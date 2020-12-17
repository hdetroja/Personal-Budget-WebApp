import { Component, OnInit } from '@angular/core';
import { FebruaryService } from '../services/february.service';
import { model } from '../model';

@Component({
  selector: 'pb-add-february',
  templateUrl: './add-february.component.html',
  styleUrls: ['./add-february.component.scss']
})
export class AddFebruaryComponent implements OnInit {
  february: model = {
    title:'',
    value:undefined
  }
  constructor(private februaryService: FebruaryService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.february.title!='' && this.february.value!=undefined){
      this.februaryService.addFebruary(this.february);
      this.february.title='';
      this.february.value=undefined;
    }

  }

}
