import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unidad } from '../model/unidad';  

@Injectable({
  providedIn: 'root'
})
export class UnidadService {
  private baseUrl = 'http://localhost:8080/api/unidad';  

  constructor(private http: HttpClient) { }

  // Obtener todas las unidades
  getUnidades(): Observable<Unidad[]> {
    return this.http.get<Unidad[]>(this.baseUrl);
  }

  // Agregar una nueva unidad
  addUnidad(unidad: Unidad): Observable<Unidad> {
    return this.http.post<Unidad>(this.baseUrl, unidad, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Eliminar una unidad por ID
  deleteUnidad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Actualizar una unidad existente
  updateUnidad(unidad: Unidad): Observable<Unidad> {
    return this.http.put<Unidad>(`${this.baseUrl}/${unidad.id}`, unidad, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
