import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';



@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {


  fgValidador : FormGroup=this.fb.group({
    'nombre' : ["",[Validators.required]],
    'apellidos' : ["",[Validators.required]],
    'cedula' : ["",[Validators.required]],
    'telefono' : ["",[Validators.required]],
    'correo' : ["",[Validators.required]],
  })

  constructor(private fb:FormBuilder,
    private servicioPersona:PersonaService,
    private router:Router) { }

  ngOnInit(): void {
  }
  
  GuardarPersona(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let cedula = this.fgValidador.controls['cedula'].value;
    let telefono = this.fgValidador.controls['telefono'].value;
    let correo = this.fgValidador.controls['correo'].value; 
    let p = new ModeloPersona();
    p.nombre=nombre;
    p.apellidos=apellidos;
    p.cedula=cedula;
    p.telefono=telefono;
    p.correo = correo;

    this.servicioPersona.CrearPersona(p).subscribe((datos:ModeloPersona)=>{
      alert("La persona fue creada correctamente");
      this.router.navigate(["/seguridad/identificar"])
    },(error:any)=>{
      alert("error en el almacenamiento");
    })
  }
}
