import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../usuarios/usuario';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdmingenerateService {
  private urlEndPoint: string = 'http://localhost:8080/api/usuarios';
  private loginUrl: string = 'http://localhost:8080/api/login';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.urlEndPoint).pipe(
      map(response => response as Usuarios[])
    );
  }

  create(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.urlEndPoint, usuario, { headers: this.httpHeaders });
  }

  getUsuario(id: number): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }

  login(usuario: Usuarios): Observable<any> {
    return this.http.post<any>(this.loginUrl, usuario, { headers: this.httpHeaders });
  }
}
