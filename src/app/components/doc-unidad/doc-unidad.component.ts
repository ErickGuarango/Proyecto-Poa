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
      addRowButton.addEventListener('click', () => this.addMultipleRows()); // Agregar filas sin límite
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

  // Función para agregar múltiples filas sin límite
  addMultipleRows(): void {
    this.addRow(); // Agregar una fila
  }

  // Función para agregar una nueva fila
  private addRow(): void {
    this.rows.push({
      counter: this.activityCounter,
      // Aquí puedes agregar más datos si es necesario
    });
    this.activityCounter++; // Incrementar el contador para la próxima fila
  }

}
