import { Component, OnInit } from '@angular/core';
import { OctoberService } from '../services/october.service';
import { model } from '../model';
import { Chart } from 'chart.js';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'pb-october',
  templateUrl: './october.component.html',
  styleUrls: ['./october.component.scss']
})
export class OctoberComponent implements OnInit {
  october!: model[];
  editState: boolean = false;
  octToEdit!: model;
  public myPieChart: any
  public myBarChart: any
  public myLineChart: any
  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [

            ],
        }
    ],
    labels: [],
    fill: false
  } as any

  constructor(private octoberService: OctoberService,public firebaseService: FirebaseService, public router: Router) {
    if(!localStorage.getItem('log')){
      this.router.navigate(['']);
    }
   }

  ngOnInit(): void {
    //let october = [this.oct.title,this.oct.value]
    let curruser: model[]=[];
    this.octoberService.getOctober().subscribe(october =>{
      //console.log(october);
      this.october = october;
      for(let i=0;i<this.october.length;i++){
        if (this.october[i]['uID']==localStorage.getItem('userid')){
          curruser.push(this.october[i])
        }
      }
      this.october = curruser;
      curruser=[];
      this.getBudget();
    setTimeout(() => {
      this.createPie();
      this.createBar();
      this.createLine();
    }, 300);
    })
  }
  deleteOctober(event: any, j: model){
    this.octoberService.deleteOctober(j);
    this.clearState();
    setTimeout(() => {
      location.reload();
    }, 100);
  }
  editOctober(event: any, j: model){
    this.editState = true;
    this.octToEdit = j;
  }
  clearState(){
    this.editState = false;
  }
  updateOctober(j: model){
    this.octoberService.updateOctober(j);
    this.clearState();
    location.reload();
  }
  getBudget(){
    for (let i = 0; i < this.october.length; i++){
      this.dataSource.datasets[0].data[i] = this.october[i].value;
      this.dataSource.labels[i] = this.october[i].title;
      this.dataSource.datasets[0].backgroundColor[i] = this.randomColors();
    }
  }
  createPie() {
    if (this.myPieChart){
      this.myPieChart.destroy()
    }
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
  }
    createBar() {
      if(this.myBarChart){
        this.myBarChart.destroy()
      }
      const ctx = document.getElementById('myChart1') as HTMLCanvasElement;
      this.myBarChart = new Chart(ctx, {
          type: 'bar',
          data: this.dataSource,
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                stacked: true
                }
              ],
              yAxes: [
                {
                  id: 'y-axis-1',
                  type: 'linear',
                  stacked: true,
                  position: 'left'
                }
              ]
            },
          }
      });
    }
      createLine() {
        if(this.myLineChart){
          this.myLineChart.destroy()
        }
        const ctx = document.getElementById('myChart2') as HTMLCanvasElement;
        this.myLineChart = new Chart(ctx, {
            type: 'line',
            data: this.dataSource,
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  stacked: true
                }
                ],
                yAxes: [
                  {
                    id: 'y-axis-1',
                    type: 'linear',
                    stacked: true,
                    position: 'left'
                  }
                ]
              },
              elements: {
                  line: {
                          fill: false
                  }
              }
          }
        });
}
randomColors(){
  const r=Math.floor(Math.random()*255);
  const g=Math.floor(Math.random()*255);
  const b=Math.floor(Math.random()*255);
  return 'rgb('+r+','+g+','+b+')';
}
}
