import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-docente',
  templateUrl: './registro-docente.component.html',
  styleUrls: ['./registro-docente.component.css']
})
export class RegistroDocenteComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Aquí podrías enviar los datos del formulario al servidor o hacer alguna otra acción
      console.log(form.value);
    }
  }
}
