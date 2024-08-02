import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Roles } from './roles'; // Ajusta la ruta según tu estructura

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  constructor() { }

  getRoles(): Observable<Roles[]> {
    // Aquí deberías hacer una llamada HTTP a tu backend para obtener los roles reales
    return of([
      { id: 1, nombre: 'DOCENTE_UNI', descripcion: "" },
      { id: 2, nombre: 'EVALUADOR', descripcion: "" },
      { id: 3, nombre: 'DOCENTE_CARRE', descripcion: "" },
      { id: 4, nombre: 'ADMINISTRADOR', descripcion: "" },
    ]);
  }
}
