import { Carrera } from "src/app/model/carrera";
import { Usuarios } from "../usuarios/usuario";
import { Unidad } from "src/app/model/unidad";


export class UsuCarrera {
    id: number = 0;
    usuario: Usuarios;
    carrera: Carrera;
    fecha: string = '';
  
    constructor() {
      this.usuario = new Usuarios(); // Asegúrate de que `Usuarios` tenga valores predeterminados válidos
      this.carrera = new Carrera('', '', '',''); // Asegúrate de que `Carrera` tenga valores predeterminados válidos
    }
}