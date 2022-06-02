import { Injectable } from '@angular/core';
import { Personas } from '../models/personas/personas.model';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  personas: Personas[];
  constructor() { 
    this.personas = [
      new Personas('N1', 'AP1', 1, true),
      new Personas('N2', 'AP2', 2, true),
      new Personas('N3', 'AP3', 3, false),
      new Personas('N4', 'AP4', 4, true),
      new Personas('N5', 'AP5', 5, false)
    ];
  }

  getAll() {
    return this.personas;
  }
}
