import { Component, OnInit } from '@angular/core';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit {

  ListaPersonas:ModeloPersona[]=[];

  constructor(private servicioPersonas: PersonaService) { }

  ngOnInit(): void {
    this.ObtenerListadoPersonas();
  }

  ObtenerListadoPersonas(){
    this.servicioPersonas.ObtenerRegistros().subscribe((datos:ModeloPersona[])=>{
      this.ListaPersonas=datos;
    })
  }
}
