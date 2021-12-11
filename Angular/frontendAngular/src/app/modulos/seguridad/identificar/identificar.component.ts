import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { SeguridadModule } from '../seguridad.module';
import * as cryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificar',
  templateUrl: './identificar.component.html',
  styleUrls: ['./identificar.component.css']
})
export class IdentificarComponent implements OnInit {

  estaIdentificado:boolean=false;

  fgValidador : FormGroup = this.fb.group({
    'usuario' : ['', [Validators.required, Validators.email]],
    'clave' : ['', [Validators.required]],
    'recaptcha' : ['', [Validators.required]]
  });

  //inicializa la variable en vacio
  siteKey:string="";

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
    ) {
      //inicia la variable del site key que se saca de la pagina de captcha de google
      this.siteKey="6LedsZIdAAAAAPnAcMQHr-xi3a5iJIZr0D1RdgH5";
     }

  ngOnInit(): void {
  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let ClaveCifrada = cryptoJS.MD5(clave).toString();

    this.servicioSeguridad.Identificar(usuario, ClaveCifrada).subscribe((datos:any) =>{
      //ok
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"])
    }, (error:any)=>{
      //malo
      alert ("datos invalidos")
    })
  }

}
