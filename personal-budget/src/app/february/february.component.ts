import { Component, OnInit } from '@angular/core';
import { FebruaryService } from '../services/february.service';
import { model } from '../model';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-february',
  templateUrl: './february.component.html',
  styleUrls: ['./february.component.scss']
})
export class FebruaryComponent implements OnInit {
  february!: model[];
  editState: boolean = false;
  febToEdit!: model;
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
  constructor(private februaryService: FebruaryService) {}

  ngOnInit(): void {
    //let february = [this.feb.title,this.feb.value]
    this.februaryService.getFebruary().subscribe(february =>{
      //console.log(february);
      this.february = february;
      this.getBudget();
    setTimeout(() => {
      this.createPie();
      this.createBar();
      this.createLine();
    }, 300);
    })
    }
    getBudget(){
      for (let i = 0; i < this.february.length; i++){
        this.dataSource.datasets[0].data[i] = this.february[i].value;
        this.dataSource.labels[i] = this.february[i].title;
        this.dataSource.datasets[0].backgroundColor[i] = this.randomColors();
      }
    }
  deleteFebruary(event: any, j: model){
    this.februaryService.deleteFebruary(j);
    this.clearState();
    location.reload();
  }
  editFebruary(event: any, j: model){
    this.editState = true;
    this.febToEdit = j;
  }
  clearState(){
    this.editState = false;
  }
  updateFebruary(j: model){
    this.februaryService.updateFebruary(j);
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
                  stacked:true
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
