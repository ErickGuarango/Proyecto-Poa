import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

// Asegúrate de registrar los módulos de Chart.js que necesitas
Chart.register(...registerables);

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  datosEstadisticos = [
    { nombre: 'Dato 1', valor: 10 },
    { nombre: 'Dato 2', valor: 20 },
    { nombre: 'Dato 3', valor: 30 },
  ];

  datosPastel = [
    { nombre: 'Unidades', valor: 50 },
    { nombre: 'Carreras', valor: 75 }
  ];

  constructor() {}

  ngOnInit(): void {
    this.crearGraficoBarras();
    this.crearGraficoPastel();
  }

  crearGraficoBarras(): void {
    const ctx = document.getElementById('estadisticasChart') as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx, {
        type: 'bar', // Tipo de gráfico de barras
        data: {
          labels: this.datosEstadisticos.map(dato => dato.nombre),
          datasets: [{
            label: 'Valores',
            data: this.datosEstadisticos.map(dato => dato.valor),
            backgroundColor: 'rgba(67, 164, 255, 0.5)',
            borderColor: 'rgba(67, 164, 255, 1)',
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
                  return `${context.label}: ${context.raw}`;
                }
              }
            }
          }
        }
      });
    }
  }
  

  crearGraficoPastel(): void {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx, {
        type: 'pie', // Tipo de gráfico de pastel
        data: {
          labels: this.datosPastel.map(dato => dato.nombre),
          datasets: [{
            label: 'Distribución',
            data: this.datosPastel.map(dato => dato.valor),
            backgroundColor: ['#ff6384', '#36a2eb'],
            borderColor: 'rgba(0, 0, 0, 0.1)',
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
                  return `${context.label}: ${context.raw}`;
                }
              }
            }
          }
        }
      });
    }
  }
}
