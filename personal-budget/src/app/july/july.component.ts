import { Component, OnInit } from '@angular/core';
import { JulyService } from '../services/july.service';
import { model } from '../model';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-july',
  templateUrl: './july.component.html',
  styleUrls: ['./july.component.scss']
})
export class JulyComponent implements OnInit {
  july!: model[];
  editState: boolean = false;
  julToEdit!: model;
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

  constructor(private julyService: JulyService) {}

  ngOnInit(): void {
    //let july = [this.jul.title,this.jul.value]
    this.julyService.getJuly().subscribe(july =>{
      //console.log(july);
      this.july = july;
      this.getBudget();
    setTimeout(() => {
      this.createPie();
      this.createBar();
      this.createLine();
    }, 300);
    })
  }
  deleteJuly(event: any, j: model){
    this.julyService.deleteJuly(j);
    this.clearState();
    location.reload();
  }
  editJuly(event: any, j: model){
    this.editState = true;
    this.julToEdit = j;
  }
  clearState(){
    this.editState = false;
  }
  updateJuly(j: model){
    this.julyService.updateJuly(j);
    this.clearState();
    location.reload();
  }
  getBudget(){
    for (let i = 0; i < this.july.length; i++){
      this.dataSource.datasets[0].data[i] = this.july[i].value;
      this.dataSource.labels[i] = this.july[i].title;
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
