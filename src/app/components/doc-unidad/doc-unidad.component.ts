import { Component, OnInit } from '@angular/core';
import  swal from 'sweetalert2';
@Component({
  selector: 'app-doc-unidad',
  templateUrl: './doc-unidad.component.html',
  styleUrls: ['./doc-unidad.component.css']
})
export class DocUnidadComponent implements OnInit {
  private activityCounter: number = 1; // Contador para las actividades
  public rows: any[] = []; // Array para almacenar las filas de la tabla
  public isButtonDisabled:boolean=true;

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

    // Verificar los campos de texto
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
      input.addEventListener('input', () => this.checkInputs());
    });
  }

  checkInputs(): void {
    const inputs = document.querySelectorAll('input[type="text"]');
    this.isButtonDisabled = Array.from(inputs).some(input => !(input as HTMLInputElement).value);
  
  }

  //alerta al guardar(solo visual)

  alert(): void {
    swal.fire({
      icon: "success",
      title: "Se ha guardado correctamente",
      showConfirmButton: false,
      timer: 1500
    });
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
      this.addRow(); // Agregar solo una fila
    } else {
      swal.fire({
        icon: 'info',
        title: 'Informacion',
        text: 'Primero debes crea una nueva estrategia.',
      });
 
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
    swal.fire({
     title: 'Estas seguro de eliminar?',
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Si'
    }).then((result)=>{
      if (result.isConfirmed){
        this.rows.splice(index, 1); // Eliminar la fila en la posición del índice proporcionado
        this.reorderRows(); // Reordenar las filas restantes
        swal.fire(
          'Eliminado con Exito',
          'Sus datos han sido eliminados.',
          'success'
        );
      }
    });

  }


  // Función para reordenar las filas de la tabla
  private reorderRows(): void {
    this.rows.forEach((row, index) => {
      row.counter = index + 1; // Ajustar el número de actividad
    });
  }
}
