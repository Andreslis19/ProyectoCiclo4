import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeloPersona } from '../modelos/persona.modelo';
import { SeguridadService } from './seguridad.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  token: string = "";

  constructor(private http:HttpClient,
    private servicioSeguridad: SeguridadService) { 
      this.token = this.servicioSeguridad.ObtenerToken();
    }

    ObtenerRegistros():Observable<ModeloPersona[]>{
      return this.http.get<ModeloPersona[]>("http://localhost:3000/personas");
    }

    ConsultaPersonaPorId(id:string):Observable<ModeloPersona>{
      return this.http.get<ModeloPersona>( `http://localhost:3000/personas/${id}`);
    }

    CrearPersona(persona: ModeloPersona):Observable<ModeloPersona>{
      return this.http.post("http://localhost:3000/personas", persona, {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      })
    }

    EliminarPersona(id:string):Observable<any>{
      return this.http.delete<ModeloPersona>(`http://localhost:3000/personas/${id}`, {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      })
    }

    EditarPersona(persona: ModeloPersona):Observable<ModeloPersona>{
      return this.http.put<ModeloPersona>( `http://localhost:3000/personas/${persona.id}`, persona, {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      })
    }
}
