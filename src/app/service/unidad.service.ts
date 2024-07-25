import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unidad } from '../model/unidad'; // Ajusta la ruta según tu estructura

@Injectable({
  providedIn: 'root'
})
export class UnidadService {
  private apiUrl = 'http://localhost:8080/api/unidades'; // Ajusta la URL según tu configuración

  constructor(private http: HttpClient) { }

  getUnidades(): Observable<Unidad[]> {
    return this.http.get<Unidad[]>(this.apiUrl);
  }

  addUnidad(unidad: Unidad): Observable<Unidad> {
    return this.http.post<Unidad>(this.apiUrl, unidad, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteUnidad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateUnidad(unidad: Unidad): Observable<Unidad> {
    return this.http.put<Unidad>(`${this.apiUrl}/${unidad.id}`, unidad, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
