import { Component, OnInit } from '@angular/core';
import { CarreraService } from '../../service/carrera.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

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

  agregarCarrera(form: NgForm) {
    if (form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor completa todos los campos requeridos.',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

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
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Carrera guardada exitosamente',
        confirmButtonText: 'Aceptar'
      });
    });
  }

  confirmarEliminacion(carrera: Carrera) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarCarrera(carrera);
      }
    });
  }

  eliminarCarrera(carrera: Carrera) {
    if (carrera.id) {
      this.carreraService.deleteCarrera(carrera.id).subscribe(() => {
        this.carreras = this.carreras.filter(c => c.id !== carrera.id);
        Swal.fire({
          icon: 'success',
          title: 'Eliminado',
          text: 'Carrera eliminada exitosamente',
          confirmButtonText: 'Aceptar'
        });
      });
    }
  }
}
