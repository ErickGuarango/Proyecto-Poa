import { ObjetivosOperativosUnidad } from './objetivos-operativos-unidad';

export class ActividadesUnidad {
  id?: number;
  descripcion: string;
  responsable: string;
  plazo: Date;
  entregable?: any;
  meta: number;
  recFinIsta: number;
  recFinAutogestion: number;
  objetivoOperativo: ObjetivosOperativosUnidad;

  constructor() {
    this.descripcion = '';
    this.responsable = '';
    this.plazo = new Date();
    this.meta = 0;
    this.recFinIsta = 0;
    this.recFinAutogestion = 0;
    this.objetivoOperativo = new ObjetivosOperativosUnidad();
  }
}
