import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  fgValidador : FormGroup=this.fb.group({
    'nombre' : ["",[Validators.required]],
    'apellidos' : ["",[Validators.required]],
    'cedula' : ["",[Validators.required]],
    'telefono' : ["",[Validators.required]],
    'correo' : ["",[Validators.required]],
    'id' : ["",[Validators.required]],
  })

  id:string ="";
  
  constructor(private fb:FormBuilder,
    private servicioPersona:PersonaService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarPersona();
  }

  EditarPersona(){
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
    p.id = this.id;

    this.servicioPersona.EditarPersona(p).subscribe((datos:ModeloPersona)=>{
      alert("persona editada exitosamente");
      this.router.navigate(["/administracion/buscar-persona"]);
    }, (error:any)=>{
      alert("error en la edicion");
    })
  }

  BuscarPersona(){
    this.servicioPersona.ConsultaPersonaPorId(this.id).subscribe((datos:ModeloPersona)=>{
      this.fgValidador.controls['nombre'].setValue(datos.nombre);
      this.fgValidador.controls['apellidos'].setValue(datos.apellidos);
      this.fgValidador.controls['cedula'].setValue(datos.cedula);
      this.fgValidador.controls['telefono'].setValue(datos.telefono);
      this.fgValidador.controls['correo'].setValue(datos.correo);
      this.fgValidador.controls['id'].setValue(datos.id);
    },(error:any)=>{
      alert("El producto no existe");
    })
  }
}
