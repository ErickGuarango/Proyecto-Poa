import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuUnidad } from './usu-unidad';

@Injectable({
  providedIn: 'root'
})
export class UsuUnidadService {
  private urlEndPoint: string = 'http://localhost:8080/api/usuUnidad';
  private loginUrl: string = 'http://localhost:8080/api/login';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getUsuUnidad(): Observable<UsuUnidad[]> {
    return this.http.get<UsuUnidad[]>(this.urlEndPoint).pipe(
      map(response => response as UsuUnidad[])
    );
  }

  create(usuUnidad: UsuUnidad): Observable<UsuUnidad> {
    return this.http.post<UsuUnidad>(this.urlEndPoint, usuUnidad, { headers: this.httpHeaders });
  }

  getUsuUnidadId(id: number): Observable<UsuUnidad> {
    return this.http.get<UsuUnidad>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }

  login(usuario: UsuUnidad): Observable<any> {
    return this.http.post<any>(this.loginUrl, usuario, { headers: this.httpHeaders });
  }
}
