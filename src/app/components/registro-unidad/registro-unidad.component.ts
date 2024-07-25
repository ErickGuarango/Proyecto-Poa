import { Component } from '@angular/core';
import Swal from 'sweetalert2';

interface Unidad {
  nombre: string;
  coordinacion: string;
  director: string;
}

@Component({
  selector: 'app-registro-unidad',
  templateUrl: './registro-unidad.component.html',
  styleUrls: ['./registro-unidad.component.css']
})
export class RegistroUnidadComponent {
  unidades: Unidad[] = [];
  nuevaUnidad: Unidad = { nombre: '', coordinacion: '', director: '' };

  agregarUnidad() {
    if (this.validarUnidad(this.nuevaUnidad)) {
      this.unidades.push({ ...this.nuevaUnidad });
      this.nuevaUnidad = { nombre: '', coordinacion: '', director: '' };
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Unidad agregada exitosamente',
        confirmButtonText: 'Aceptar'
      });
    }
  }

  editarUnidad(index: number) {
    // Lógica para editar una unidad
    Swal.fire({
      icon: 'info',
      title: 'Editar',
      text: 'Funcionalidad de edición aún no implementada',
      confirmButtonText: 'Aceptar'
    });
  }

  confirmarEliminacion(index: number) {
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
        this.eliminarUnidad(index);
      }
    });
  }

  eliminarUnidad(index: number) {
    this.unidades.splice(index, 1);
    Swal.fire({
      icon: 'success',
      title: 'Eliminado',
      text: 'Unidad eliminada exitosamente',
      confirmButtonText: 'Aceptar'
    });
  }

  validarUnidad(unidad: Unidad): boolean {
    if (!unidad.nombre || !unidad.coordinacion || !unidad.director) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos.',
        confirmButtonText: 'Aceptar'
      });
      return false;
    }
    return true;
  }
}
