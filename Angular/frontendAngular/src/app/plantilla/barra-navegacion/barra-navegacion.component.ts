import { Component, OnInit } from '@angular/core';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';

declare const M:any;

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  //inicio del menu cuando se minimiza la pagina
  ngAfterViewInit(){
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  }

  sesionIniciada?:boolean = false;
  subs:Subscription = new Subscription();

  constructor(private seguridadServicio : SeguridadService) { }

  ngOnInit(): void {
    this.subs=this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar) =>{
      this.sesionIniciada=datos.estaIdentificado;
    })
  }

}
