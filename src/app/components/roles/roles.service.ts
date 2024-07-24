import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Roles } from './roles'; // Ajusta la ruta según tu estructura

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor() { }

  getRoles(): Observable<Roles[]> {
    // Simulación de datos obtenidos desde la base de datos
    const roles: Roles[] = [
      { id: 1, nombre: 'DOCENTE', descripcion: ""},
      { id: 2, nombre: 'EVALUADOR', descripcion: ""},
      { id: 3, nombre: 'ADMINISTRADOR', descripcion: ""}
    ];
    return of(roles);
  }
}
