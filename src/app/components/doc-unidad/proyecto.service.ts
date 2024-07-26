import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from './proyecto'; //

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private url: string = 'http://localhost:8080/api/proyecto';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url);
  }

  getProyecto(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.url}/${id}`);
  }

  createProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.url, proyecto, { headers: this.httpHeaders });
  }

  updateProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.url}/${proyecto.id}`, proyecto, { headers: this.httpHeaders });
  }

  deleteProyecto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`, { headers: this.httpHeaders });
  }
}
