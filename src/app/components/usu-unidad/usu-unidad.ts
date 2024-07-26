import { Carrera } from "src/app/model/carrera";
import { Usuarios } from "../usuarios/usuario";
import { Unidad } from "src/app/model/unidad";

export class UsuUnidad {
    id: number = 0;                   // Mapea el id como Long en el backend
    usuario: Usuarios = new Usuarios();         // Mapea la relación Many-to-One con Roles
    unidad: Unidad = new Unidad("","","");         // Mapea la relación Many-to-One con Roles

    fecha: string = "";        // Mapea la fecha de nacimiento como String en el backend

}
