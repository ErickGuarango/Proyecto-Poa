import { Component } from '@angular/core';

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
    this.unidades.push({ ...this.nuevaUnidad });
    this.nuevaUnidad = { nombre: '', coordinacion: '', director: '' };
  }

  editarUnidad(index: number) {
    // Lógica para editar una unidad
  }

  eliminarUnidad(index: number) {
    this.unidades.splice(index, 1);
  }
}
