import { Component, OnInit } from '@angular/core';
import { JuneService } from '../services/june.service';
import { model } from '../model';
import { Chart } from 'chart.js';


@Component({
  selector: 'pb-june',
  templateUrl: './june.component.html',
  styleUrls: ['./june.component.scss']
})
export class JuneComponent implements OnInit {
  june!: model[];
  editState: boolean = false;
  junToEdit!: model;
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

  constructor(private juneService: JuneService) {}

  ngOnInit(): void {
    //let june = [this.jun.title,this.jun.value]
    this.juneService.getJune().subscribe(june =>{
      //console.log(june);
      this.june = june;
      this.getBudget();
    setTimeout(() => {
      this.createPie();
      this.createBar();
      this.createLine();
    }, 300);
    })
  }
  deleteJune(event: any, j: model){
    this.juneService.deleteJune(j);
    this.clearState();
    location.reload();
  }
  editJune(event: any, j: model){
    this.editState = true;
    this.junToEdit = j;
  }
  clearState(){
    this.editState = false;
  }
  updateJune(j: model){
    this.juneService.updateJune(j);
    this.clearState();
    location.reload();
  }
  getBudget(){
    for (let i = 0; i < this.june.length; i++){
      this.dataSource.datasets[0].data[i] = this.june[i].value;
      this.dataSource.labels[i] = this.june[i].title;
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
