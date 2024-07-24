import { Injectable } from '@angular/core';
import { Usuarios } from './usuario';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private  urlEndPoint:string='http://localhost:8080/api/usuarios';
  private  urlEndPoint1:string='http://localhost:8080/api';



  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http:HttpClient) { }
//metodo para listar a los Usuarioss
  getUsuarios(): Observable<Usuarios[]>{
   return this.http.get(this.urlEndPoint).pipe(
    map(response => response as Usuarios[])
   );
  }
//metodo para crear Usuarioss
  create(usuario: Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>(this.urlEndPoint, usuario, {headers: this.httpHeaders})
  }

  //metodo para editar un Usuarios

  getUsuario(id: Usuarios):Observable<Usuarios>{
    return this.http.get<Usuarios>(`${this.urlEndPoint}/${id}`);
   }

   delete(id: Usuarios):Observable<Usuarios>{
    return this.http.delete<Usuarios>(`${this.urlEndPoint}/${id}` )
   }
   login(usuario: Usuarios): Observable<any> {
    return this.http.post<any>(`${this.urlEndPoint1}/login`, usuario, { headers: this.httpHeaders });
  }

}
