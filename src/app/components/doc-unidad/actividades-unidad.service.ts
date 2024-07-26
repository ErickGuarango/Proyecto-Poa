import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActividadesUnidad } from './actividades-unidad';

@Injectable({
  providedIn: 'root'
})
export class ActividadesUnidadService {
  private url = 'http://localhost:8080/api/actividadesUnidad';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  createActividad(actividad: ActividadesUnidad): Observable<ActividadesUnidad> {
    return this.http.post<ActividadesUnidad>(this.url, actividad, { headers: this.httpHeaders });
  }

  updateActividad(actividad: ActividadesUnidad): Observable<ActividadesUnidad> {
    return this.http.put<ActividadesUnidad>(`${this.url}/${actividad.id}`, actividad, { headers: this.httpHeaders });
  }

  deleteActividad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`, { headers: this.httpHeaders });
  }

  getActividad(id: number): Observable<ActividadesUnidad> {
    return this.http.get<ActividadesUnidad>(`${this.url}/${id}`);
  }

  getActividades(): Observable<ActividadesUnidad[]> {
    return this.http.get<ActividadesUnidad[]>(this.url);
  }
}
