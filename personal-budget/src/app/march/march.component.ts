import { Component, OnInit } from '@angular/core';
import { MarchService } from '../services/march.service';
import { model } from '../model';
import { Chart } from 'chart.js';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'pb-march',
  templateUrl: './march.component.html',
  styleUrls: ['./march.component.scss']
})
export class MarchComponent implements OnInit {
  march!: model[];
  editState: boolean = false;
  marToEdit!: model;
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
  constructor(private marchService: MarchService,public firebaseService: FirebaseService, public router: Router) {
    if(!localStorage.getItem('log')){
      this.router.navigate(['']);
    }
   }

  ngOnInit(): void {
    let curruser: model[]=[];
    //let march = [this.mar.title,this.mar.value]
    this.marchService.getMarch().subscribe(march =>{
      //console.log(march);
      this.march = march;
      for(let i=0;i<this.march.length;i++){
        if (this.march[i]['uID']==localStorage.getItem('userid')){
          curruser.push(this.march[i])
        }
      }
      this.march = curruser;
      curruser=[];
      this.getBudget();
    setTimeout(() => {
      this.createPie();
      this.createBar();
      this.createLine();
    }, 300);
    })
  }
  getBudget(){
    for (let i = 0; i < this.march.length; i++){
      this.dataSource.datasets[0].data[i] = this.march[i].value;
      this.dataSource.labels[i] = this.march[i].title;
      this.dataSource.datasets[0].backgroundColor[i] = this.randomColors();
    }
  }
  deleteMarch(event: any, j: model){
    this.marchService.deleteMarch(j);
    this.clearState();
    setTimeout(() => {
      location.reload();
    }, 100);
  }
  editMarch(event: any, j: model){
    this.editState = true;
    this.marToEdit = j;
  }
  clearState(){
    this.editState = false;
  }
  updateMarch(j: model){
    this.marchService.updateMarch(j);
    this.clearState();
    location.reload();
  }
  createPie() {
    if (this.myPieChart){
      this.myPieChart.destroy()
    }
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
  }
    createBar() {
      if(this.myBarChart){
        this.myBarChart.destroy()
      }
      const ctx = document.getElementById('myChart1') as HTMLCanvasElement;
      const myPieChart = new Chart(ctx, {
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
        const myPieChart = new Chart(ctx, {
            type: 'line',
            data: this.dataSource,
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  stacked: true
                }],
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
