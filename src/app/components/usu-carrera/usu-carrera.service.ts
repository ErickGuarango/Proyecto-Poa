import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuCarrera } from './usu-carrera';

@Injectable({
  providedIn: 'root'
})
export class UsuCarreraService {
  private urlEndPoint: string = 'http://localhost:8080/api/usuCarrera';
  private loginUrl: string = 'http://localhost:8080/api/login';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getUsuCarrera(): Observable<UsuCarrera[]> {
    return this.http.get<UsuCarrera[]>(this.urlEndPoint).pipe(
      map(response => response as UsuCarrera[])
    );
  }

  create(usuCarrera: UsuCarrera): Observable<UsuCarrera> {
    return this.http.post<UsuCarrera>(this.urlEndPoint, usuCarrera, { headers: this.httpHeaders });
  }

  getUsuCarreraId(id: number): Observable<UsuCarrera> {
    return this.http.get<UsuCarrera>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }

  login(usuario: UsuCarrera): Observable<any> {
    return this.http.post<any>(this.loginUrl, usuario, { headers: this.httpHeaders });
  }
}
