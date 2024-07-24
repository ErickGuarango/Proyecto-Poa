export class Carrera {
    id?: number;
    nombre: string;
    coordinacion: string;
    periodo: string;
    director: string;
  
    constructor(nombre: string, coordinacion: string, periodo: string, director: string, id?: number) {
      this.nombre = nombre;
      this.coordinacion = coordinacion;
      this.periodo = periodo;
      this.director = director;
      this.id = id;
    }
  }
  