import { Component } from '@angular/core';
import { Personas } from './models/personas/personas.model';
import { Escritores } from './models/personas/escritores.model';
import { PersonasService } from './servicios/personas.service';
import { EscritoresService } from "./servicios/escritores.service";
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrPersonas: Personas[];
  arrEscritores: Escritores[];
  arrCiudades: string[];
  data: any;
  constructor(private personasService: PersonasService, private escritoresService: EscritoresService){ 
    this.arrPersonas = []; 
    this.arrEscritores = []; 
    this.arrCiudades =[];
    this.data = [];
  }

  ngOnInit(): void{
    this.arrPersonas = this.personasService.getAll();
    this.arrEscritores = this.escritoresService.getAll();
    console.log(this.arrPersonas);

    for(let ciudad of this.arrEscritores) {
      
      this.arrCiudades.push(ciudad.ciudad);
      
    }

    console.log(this.arrCiudades);

    this.data = new Set(this.arrCiudades);

    console.log(this.data);
    
    
  }

  changeCiudad(event: any){
    //console.log(event.target.value);
    this.arrEscritores = this.escritoresService.getFilterCity(event.target.value);
  }
}
