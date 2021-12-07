import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModeloIdentificar } from '../modelos/identificar.modelo';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  datosUsuarioEnSesion = new BehaviorSubject <ModeloIdentificar> (new ModeloIdentificar());

  constructor(private http: HttpClient) { 
    this.VerificarSesionActual();
  }

  Identificar(usuario : string , clave : string):Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>("http://localhost:3000/identificarPersona", {
      usuario: usuario,
      clave: clave
    },{
      headers: new HttpHeaders({
        
      })
    })
  }

  VerificarSesionActual(){
    let datos = this.ObtenerInformacionSesion();
    if (datos){
      this.datosUsuarioEnSesion.next(datos);
    }
  }

  AlmacenarSesion(datos:ModeloIdentificar){

    datos.estaIdentificado = true;
    let datosString=JSON.stringify(datos);
    localStorage.setItem("datosSesion",datosString);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }

  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }


  SeHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }

  RefrescarDatosSesion(datos:ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }

}
