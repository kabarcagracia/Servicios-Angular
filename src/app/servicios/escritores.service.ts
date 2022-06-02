import { Injectable } from '@angular/core';
import { Escritores } from '../models/personas/escritores.model';
@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  escritores: Escritores[];
  constructor() { 
    this.escritores = [
      new Escritores('Escritor', '1', 'url1', 'España'),
      new Escritores('Escritor', '2', 'url2', 'Chile'),
      new Escritores('Escritor', '3', 'url3', 'Argentina'),
      new Escritores('Escritor', '4', 'url4', 'España'),
      new Escritores('Escritor', '5', 'url5', 'Argentina'),
      new Escritores('Escritor', '6', 'url6', 'Brazil'),
      new Escritores('Escritor', '7', 'url7', 'Chile'),
      new Escritores('Escritor', '8', 'url8', 'España'),
      new Escritores('Escritor', '9', 'url9', 'España'),
      new Escritores('Escritor', '10', 'url10', 'Chile'),
      new Escritores('Escritor', '11', 'url11', 'Argentina'),
    ];
  }

  getAll() {
    return this.escritores;
  }


  getFilterCity(city: string){
      let filterCity = this.escritores.filter(escritor => escritor.ciudad == city);
      return filterCity;
  }

  getFilterPromiseCity(city: string): Promise<Escritores[]> {

      const prom = new Promise<Escritores[]>((resolve, reject)=> {
        let filterCity = this.escritores.filter(escritor => escritor.ciudad == city);
        resolve(filterCity);


      });
      return prom;

  }
}