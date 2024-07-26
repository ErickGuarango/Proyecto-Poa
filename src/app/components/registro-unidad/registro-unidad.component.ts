import { Component, OnInit } from '@angular/core';
import { UnidadService } from '../../service/unidad.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

interface Unidad {
  id?: number;
  nombre: string;
  coordinacion: string;
  director: string;
}

@Component({
  selector: 'app-registro-unidad',
  templateUrl: './registro-unidad.component.html',
  styleUrls: ['./registro-unidad.component.css']
})
export class RegistroUnidadComponent implements OnInit {
  unidades: Unidad[] = [];
  nuevaUnidad: Unidad = {
    nombre: '',
    coordinacion: '',
    director: ''
  };
  

  constructor(private unidadService: UnidadService) {}

  ngOnInit() {
    this.obtenerUnidades();
  }

  obtenerUnidades() {
    this.unidadService.getUnidades().subscribe((data: Unidad[]) => {
      this.unidades = data;
    });
  }

  agregarUnidad(form: NgForm) {
    if (form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor completa todos los campos requeridos.',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    const unidad: Unidad = {
      nombre: this.nuevaUnidad.nombre,
      coordinacion: this.nuevaUnidad.coordinacion,
      director: this.nuevaUnidad.director
    };

    this.unidadService.addUnidad(unidad).subscribe((unidad: Unidad) => {
      this.unidades.push(unidad);
      this.nuevaUnidad = {
        nombre: '',
        coordinacion: '',
        director: ''
      };
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Unidad guardada exitosamente',
        confirmButtonText: 'Aceptar'
      });
    });
  }

  confirmarEliminacion(unidad: Unidad) {
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
        this.eliminarUnidad(unidad);
      }
    });
  }

  eliminarUnidad(unidad: Unidad) {
    if (unidad.id) {
      this.unidadService.deleteUnidad(unidad.id).subscribe(() => {
        this.unidades = this.unidades.filter(u => u.id !== unidad.id);
        Swal.fire({
          icon: 'success',
          title: 'Eliminado',
          text: 'Unidad eliminada exitosamente',
          confirmButtonText: 'Aceptar'
        });
      });
    }
  }
}
