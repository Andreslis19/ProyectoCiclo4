import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModeloIdentificar } from '../modelos/identificar.modelo';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HttpClient) { }

  Identificar(usuario : string , clave : string):Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>("http://localhost:3000/identificarPersona", {
      usuario: usuario,
      clave: clave
    },{
      headers: new HttpHeaders({
        
      })
    })
  }
}
