import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {


  fgValidador : FormGroup=this.fb.group({
    'Nombre' : ["",[Validators.required]],
    'Descripcion' : ["",[Validators.required]],
    'Cantidad' : ["",[Validators.required]],
    'Precio' : ["",[Validators.required]],
    'Foto' : ["",[Validators.required]],
  })

  constructor(private fb:FormBuilder,
    private servicioProducto:ProductoService,
    private router:Router) { }

  ngOnInit(): void {
  }

  GuardarProducto(){
    let Nombre = this.fgValidador.controls['Nombre'].value;
    let Descripcion = this.fgValidador.controls['Descripcion'].value;
    let Cantidad = parseInt(this.fgValidador.controls['Cantidad'].value);
    let Precio = parseInt(this.fgValidador.controls['Precio'].value);
    let Foto = this.fgValidador.controls['Foto'].value; 
    let p = new ModeloProducto();
    p.Nombre=Nombre;
    p.Descripcion=Descripcion;
    p.Cantidad=Cantidad;
    p.Precio=Precio;
    p.Foto = Foto;

    this.servicioProducto.CrearProducto(p).subscribe((datos:ModeloProducto)=>{
      alert("el producto fue creado correctamente");
      this.router.navigate(["/administracion/buscar-producto"])
    },(error:any)=>{
      alert("error en el almacenamiento");
    })
  }

}
