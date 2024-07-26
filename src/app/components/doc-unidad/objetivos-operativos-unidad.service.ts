import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObjetivosOperativosUnidad } from './objetivos-operativos-unidad';

@Injectable({
  providedIn: 'root'
})
export class ObjetivosOperativosUnidadService {
  private url = 'http://localhost:8080/api/objetivosOperativosUnidad';

  constructor(private http: HttpClient) {}

  createObjetivoOperativo(objetivoOperativo: ObjetivosOperativosUnidad): Observable<ObjetivosOperativosUnidad> {
    return this.http.post<ObjetivosOperativosUnidad>(this.url, objetivoOperativo);
  }
}
