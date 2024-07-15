import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username: string, password: string): Observable<any> {
    // Aquí simulas una respuesta exitosa con código 200 y un mensaje de éxito.
    const fakeResponse = { code: 200, data: 'Inicio de sesión exitoso' };
    return of(fakeResponse); // Simula una respuesta observable exitosa
  }
}
