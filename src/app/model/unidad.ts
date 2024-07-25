export class Unidad {
  id?: number;
  nombre: string;
  coordinacion: string;
  director: string;

  constructor(nombre: string, coordinacion: string, director: string, id?: number) {
    this.nombre = nombre;
    this.coordinacion = coordinacion;
    this.director = director;
    this.id = id;
  }
}
