import { Component } from '@angular/core';

interface Carrera {
  nombre: string;
  coordinacion: string;
  periodoInicio: string;
  periodoFin: string;
  director: string;
}

@Component({
  selector: 'app-registro-carreras',
  templateUrl: './registro-carreras.component.html',
  styleUrls: ['./registro-carreras.component.css']
})
export class RegistroCarrerasComponent {
  carreras: Carrera[] = [];
  nuevaCarrera: Carrera = {
    nombre: '',
    coordinacion: '',
    periodoInicio: '',
    periodoFin: '',
    director: ''
  };

  agregarCarrera() {
    this.carreras.push({ ...this.nuevaCarrera });
    this.nuevaCarrera = {
      nombre: '',
      coordinacion: '',
      periodoInicio: '',
      periodoFin: '',
      director: ''
    };
  }

  editarCarrera(carrera: Carrera) {
    // Lógica para editar una carrera
  }

  eliminarCarrera(carrera: Carrera) {
    this.carreras = this.carreras.filter(c => c !== carrera);
  }
}
