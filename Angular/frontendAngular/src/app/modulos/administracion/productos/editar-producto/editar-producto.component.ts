import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'Nombre' : ["",[Validators.required]],
    'Descripcion' : ["",[Validators.required]],
    'Cantidad' : ["",[Validators.required]],
    'Precio' : ["",[Validators.required]],
    'Foto' : ["",[Validators.required]],
    'id' : ["",[Validators.required]],
  })

  id:string ="";

  constructor(private fb:FormBuilder,
    private servicioProducto: ProductoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //permite cual se llama la clase
    this.id=this.route.snapshot.params["id"];
    this.BuscarProducto();
  }


  EditarProducto(){
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
    p.id = this.id;

    this.servicioProducto.EditarProducto(p).subscribe((datos:ModeloProducto)=>{
      alert("el producto ha sido editado exitosamente");
      this.router.navigate(["/administracion/buscar-producto"]);
    }, (error:any)=>{
      alert("error en la edicion");
    })
  }

  BuscarProducto(){
    this.servicioProducto.ConsultaProductoPorId(this.id).subscribe((datos:ModeloProducto)=>{
      this.fgValidador.controls['Nombre'].setValue(datos.Nombre);
      this.fgValidador.controls['Descripcion'].setValue(datos.Descripcion);
      this.fgValidador.controls['Cantidad'].setValue(datos.Cantidad);
      this.fgValidador.controls['Precio'].setValue(datos.Precio);
      this.fgValidador.controls['Foto'].setValue(datos.Foto);
      this.fgValidador.controls['id'].setValue(datos.id);
    },(error:any)=>{
      alert("El producto no existe");
    })
  }
}
