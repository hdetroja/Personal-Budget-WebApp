import { Component, OnInit } from '@angular/core';
import { SeptemberService } from '../services/september.service';
import { model } from '../model';
import { Chart } from 'chart.js';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'pb-september',
  templateUrl: './september.component.html',
  styleUrls: ['./september.component.scss']
})
export class SeptemberComponent implements OnInit {
  september!: model[];
  editState: boolean = false;
  sepToEdit!: model;
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

  constructor(private septemberService: SeptemberService,public firebaseService: FirebaseService, public router: Router) {
    if(!localStorage.getItem('log')){
      this.router.navigate(['']);
    }
   }
  ngOnInit(): void {
    //let september = [this.sep.title,this.sep.value]
    this.septemberService.getSeptember().subscribe(september =>{
      //console.log(september);
      this.september = september;
      this.getBudget();
    setTimeout(() => {
      this.createPie();
      this.createBar();
      this.createLine();
    }, 300);
    })
  }
  deleteSeptember(event: any, j: model){
    this.septemberService.deleteSeptember(j);
    this.clearState();
    setTimeout(() => {
      location.reload();
    }, 100);
  }
  editSeptember(event: any, j: model){
    this.editState = true;
    this.sepToEdit = j;
  }
  clearState(){
    this.editState = false;
  }
  updateSeptember(j: model){
    this.septemberService.updateSeptember(j);
    this.clearState();
    location.reload();
  }
  getBudget(){
    for (let i = 0; i < this.september.length; i++){
      this.dataSource.datasets[0].data[i] = this.september[i].value;
      this.dataSource.labels[i] = this.september[i].title;
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
