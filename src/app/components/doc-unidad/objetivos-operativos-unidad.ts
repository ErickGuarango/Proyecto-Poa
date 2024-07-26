import { Proyecto } from './proyecto';

export class ObjetivosOperativosUnidad {
    id?: number  ;
    descripcion: string = " ";
    proyecto: Proyecto;
  
    constructor() {
        this.descripcion = " ";
        this.proyecto = new Proyecto(); 
    }
}
