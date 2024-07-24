import { Component, OnInit } from '@angular/core';
import { CarreraService } from '../../service/carrera.service';

interface Carrera {
  id?: number;
  nombre: string;
  coordinacion: string;
  periodo: string;
  director: string;
}

@Component({
  selector: 'app-registro-carreras',
  templateUrl: './registro-carreras.component.html',
  styleUrls: ['./registro-carreras.component.css']
})
export class RegistroCarrerasComponent implements OnInit {
  carreras: Carrera[] = [];
  nuevaCarrera: { nombre: string; coordinacion: string; periodoInicio: string; periodoFin: string; director: string; } = {
    nombre: '',
    coordinacion: '',
    periodoInicio: '',
    periodoFin: '',
    director: ''
  };

  constructor(private carreraService: CarreraService) {}

  ngOnInit() {
    this.obtenerCarreras();
  }

  obtenerCarreras() {
    this.carreraService.getCarreras().subscribe((data: Carrera[]) => {
      this.carreras = data;
    });
  }

  agregarCarrera() {
    const periodo = `${this.nuevaCarrera.periodoInicio} - ${this.nuevaCarrera.periodoFin}`;
    const carrera: Carrera = {
      nombre: this.nuevaCarrera.nombre,
      coordinacion: this.nuevaCarrera.coordinacion,
      periodo,
      director: this.nuevaCarrera.director
    };

    this.carreraService.addCarrera(carrera).subscribe((carrera: Carrera) => {
      this.carreras.push(carrera);
      this.nuevaCarrera = {
        nombre: '',
        coordinacion: '',
        periodoInicio: '',
        periodoFin: '',
        director: ''
      };
    });
  }

  eliminarCarrera(carrera: Carrera) {
    if (carrera.id) {
      this.carreraService.deleteCarrera(carrera.id).subscribe(() => {
        this.carreras = this.carreras.filter(c => c.id !== carrera.id);
      });
    }
  }

  editarCarrera(carrera: Carrera) {
    // Lógica para editar una carrera
  }
}
