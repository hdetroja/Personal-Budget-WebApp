import { Component, OnInit } from '@angular/core';
import { MayService } from '../services/may.service';
import { model } from '../model';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-may',
  templateUrl: './may.component.html',
  styleUrls: ['./may.component.scss']
})
export class MayComponent implements OnInit {
  may!: model[];
  editState: boolean = false;
  mayToEdit!: model;
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

  constructor(private mayService: MayService) {}

  ngOnInit(): void {
    //let may = [this.may.title,this.may.value]
    this.mayService.getMay().subscribe(may =>{
      //console.log(may);
      this.may = may;
      this.getBudget();
    setTimeout(() => {
      this.createPie();
      this.createBar();
      this.createLine();
    }, 300);
    })
  }
  deleteMay(event: any, j: model){
    this.mayService.deleteMay(j);
    this.clearState();
    location.reload();
  }
  editMay(event: any, j: model){
    this.editState = true;
    this.mayToEdit = j;
  }
  clearState(){
    this.editState = false;
  }
  updateMay(j: model){
    this.mayService.updateMay(j);
    this.clearState();
    location.reload();
  }
  getBudget(){
    for (let i = 0; i < this.may.length; i++){
      this.dataSource.datasets[0].data[i] = this.may[i].value;
      this.dataSource.labels[i] = this.may[i].title;
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
