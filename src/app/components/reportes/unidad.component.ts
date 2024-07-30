import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-reportes',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createPieChart();
  }

  createPieChart() {
    const ctx = document.getElementById('myPieChart') as HTMLCanvasElement;
    
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['VERDE', 'AMARILLO', 'CAFE', 'ROJO'],
        datasets: [{
          label: 'Porcentaje',
          data: [25, 50, 25, 0], // Los porcentajes de la tabla 2
          backgroundColor: ['#08ba3a', '#e7d802', '#b49b0f', 'red'],
          borderColor: '#fff',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.label || '';
                if (context.parsed > 0) {
                  label += `: ${context.raw}%`;
                }
                return label;
              }
            }
          }
        }
      }
    });
  }
}
