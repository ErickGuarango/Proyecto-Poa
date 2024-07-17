import { Component } from '@angular/core';

interface Evaluacion {
  fechaEntrega: string;
  actividad: string;
  docenteResponsable: string;
  descripcion: string;
  entregable: string; // URL del PDF
  porcentajeEjecutado: number;
  costosFijos: number;
  horasEstimadas: number;
  horasActuales: number;
  observacion: string;
}

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent {
  evaluaciones: Evaluacion[] = [
    {
      fechaEntrega: '2024/07/20',
      actividad: 'Actividad 1',
      docenteResponsable: 'Docente A',
      descripcion: 'Descripción 1',
      entregable: 'path/to/pdf1.pdf',
      porcentajeEjecutado: 0,
      costosFijos: 100,
      horasEstimadas: 10,
      horasActuales: 8,
      observacion: 'Observación 1'
    },
    {
      fechaEntrega: '2024/07/21',
      actividad: 'Actividad 2',
      docenteResponsable: 'Docente B',
      descripcion: 'Descripción 2',
      entregable: 'path/to/pdf2.pdf',
      porcentajeEjecutado: 0,
      costosFijos: 200,
      horasEstimadas: 15,
      horasActuales: 12,
      observacion: 'Observación 2'
    }
  ];

  evaluacionesFiltradas: Evaluacion[] = [...this.evaluaciones]; // Copia inicial de evaluaciones

  filtroAnio = 0;
  filtroMes=0;
  filtroDia = 0;

  constructor() {}

  buscarPorFecha() {
    if (this.filtroAnio && this.filtroMes && this.filtroDia) {
      const fechaBusqueda = `${this.filtroAnio}/${this.filtroMes}/${this.filtroDia}`;
      this.evaluacionesFiltradas = this.evaluaciones.filter(evaluacion =>
        evaluacion.fechaEntrega.includes(fechaBusqueda)
      );
    } else {
      // Si falta algún campo de fecha, mostrar un mensaje o manejar el caso según tus requisitos
      console.log('Debe ingresar todos los campos de fecha para buscar.');
    }
  }
}
