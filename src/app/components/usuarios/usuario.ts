import { Roles } from "../roles/roles";  // Asegúrate de que la ruta sea correcta

export class Usuarios {
    id: number = 0;                   // Mapea el id como Long en el backend
    usuario: string = "";             // Mapea el nombre de usuario como String en el backend
    contrasena: string = "";          // Mapea la contraseña como String en el backend
    nombre: string = "";              // Mapea el nombre como String en el backend
    apellido: string = "";            // Mapea el apellido como String en el backend
    correo: string = "";              // Mapea el correo como String en el backend
    f_nacimiento: string = "";        // Mapea la fecha de nacimiento como String en el backend
    rol: Roles = new Roles();         // Mapea la relación Many-to-One con Roles
}
