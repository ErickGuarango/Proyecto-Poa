import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrera } from '../model/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private baseUrl = 'http://localhost:8080/api/carreras';  // Cambia esto según la URL de tu API

  constructor(private http: HttpClient) { }

  getCarreras(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(this.baseUrl);
  }

  addCarrera(carrera: Carrera): Observable<Carrera> {
    return this.http.post<Carrera>(this.baseUrl, carrera, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteCarrera(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  updateCarrera(carrera: Carrera): Observable<Carrera> {
    return this.http.put<Carrera>(`${this.baseUrl}/${carrera.id}`, carrera, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
