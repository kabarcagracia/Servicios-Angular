export class Escritores { 
    nombre: string;
    apellidos: string;
    url: string;
    ciudad: string;

    constructor(pNombre: string, pApellidos: string, pUrl: string, pCiudad: string) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.url = pUrl;
        this.ciudad = pCiudad;
    }
}