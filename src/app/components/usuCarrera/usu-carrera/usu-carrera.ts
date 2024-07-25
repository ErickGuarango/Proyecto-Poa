import { Carrera } from "src/app/model/carrera";
import { Usuarios } from "../../usuarios/usuario";

export class UsuCarrera {
    id: number = 0;                   // Mapea el id como Long en el backend
    usuario:  Usuarios = new Usuarios(); 
    carrera: Carrera = new Carrera("","","","",0);   
}
