import { Component } from '@angular/core';

interface Carrera {
  nombre: string;
  periodoInicio: string;
  periodoFin: string;
  descripcion: string;
}

@Component({
  selector: 'app-registro-carreras',
  templateUrl: './registro-carreras.component.html',
  styleUrls: ['./registro-carreras.component.css']
})
export class RegistroCarrerasComponent {
  carreras: Carrera[] = [];
  nuevaCarrera: Carrera = { nombre: '', periodoInicio: '', periodoFin: '', descripcion: '' };

  agregarCarrera() {
    this.carreras.push({ ...this.nuevaCarrera });
    this.nuevaCarrera = { nombre: '', periodoInicio: '', periodoFin: '', descripcion: '' };
  }

  editarCarrera(carrera: Carrera) {
    // lógica para editar la carrera
  }

  eliminarCarrera(carrera: Carrera) {
    this.carreras = this.carreras.filter(c => c !== carrera);
  }
}
