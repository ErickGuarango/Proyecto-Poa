import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-unidad',
  templateUrl: './doc-unidad.component.html',
  styleUrls: ['./doc-unidad.component.css']
})
export class DocUnidadComponent implements OnInit {
  private activityCounter: number = 1; // Contador para las actividades
  public rows: any[] = []; // Array para almacenar las filas de la tabla

  constructor() {}

  ngOnInit(): void {
    // Inicializar la tabla vacía al cargar la vista
    this.clearTable();

    // Añadir el evento de clic al botón "Nuevo"
    const nuevoButton = document.getElementById('nuevoButton');
    if (nuevoButton) {
      nuevoButton.addEventListener('click', () => this.addSingleRowWithReset());
    }

    // Añadir el evento de clic al botón "+"
    const addRowButton = document.getElementById('addRowButton');
    if (addRowButton) {
      addRowButton.addEventListener('click', () => this.addMultipleRows());
    }
  }

  // Función para limpiar la tabla
  clearTable(): void {
    this.rows = []; // Limpiar el array de filas
    this.activityCounter = 1; // Reiniciar el contador
  }

  // Función para agregar una fila y limpiar la tabla primero
  addSingleRowWithReset(): void {
    this.clearTable(); // Limpiar la tabla
    this.addRow(); // Agregar una fila
  }

  // Función para agregar múltiples filas si ya hay al menos una fila en la tabla
  addMultipleRows(): void {
    if (this.rows.length > 0) { // Verificar si ya hay filas
      const rowsToAdd = 3; // Número de filas adicionales a agregar
      for (let i = 0; i < rowsToAdd; i++) {
        this.addRow(); // Agregar una fila
      }
    } else {
      alert('Debe haber al menos una fila en la tabla antes de agregar más filas.');
    }
  }

  // Función para agregar una nueva fila
  private addRow(): void {
    this.rows.push({
      counter: this.activityCounter,
      // Aquí puedes agregar más datos si es necesario
    });
    this.activityCounter++; // Incrementar el contador para la próxima fila
  }

  // Función para eliminar una fila y reordenar las demás
  removeRow(index: number): void {
    this.rows.splice(index, 1); // Eliminar la fila en la posición del índice proporcionado
    this.reorderRows(); // Reordenar las filas restantes
  }

  // Función para reordenar las filas de la tabla
  private reorderRows(): void {
    this.rows.forEach((row, index) => {
      row.counter = index + 1; // Ajustar el número de actividad
    });
  }
}