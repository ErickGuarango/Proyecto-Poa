import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {
  private baseUrl = 'http://localhost:8080/api'; // URL base para las peticiones

  constructor(private http: HttpClient) {}

  getDocentesPorCarrera(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/docentes-por-carrera`);
  }

  getDocentesPorUnidad(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/docentes-por-unidad`);
  }

  getTotalCarreras(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total-carreras`);
  }

  getTotalUnidades(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total-unidades`);
  }
}
