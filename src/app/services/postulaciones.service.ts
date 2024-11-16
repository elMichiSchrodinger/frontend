import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Postulaciones} from '../models/postulaciones.model';

@Injectable({
  providedIn: 'root'
})
export class PostulacionesService {
  private apiUrl='http://localhost:8080/postulaciones';
  constructor(private http: HttpClient) { }
  getPostulaciones(area?:string, titulo?:string): Observable<Postulaciones[]> {
    let params = new HttpParams();
    if (area) params = params.set('area', area);
    if (titulo) params = params.set('titulo', titulo);
    return this.http.get<Postulaciones[]>(this.apiUrl, {params}).pipe(
      map((data: any[]) =>
        data.map((item) => new Postulaciones(
          item.id_postulacion,
          item.nombre,
          item.area,
          item.titulo,
          item.salario
        ))
      )
    );
  }
}
