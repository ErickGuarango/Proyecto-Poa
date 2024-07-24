import { Component, OnInit } from '@angular/core';
import { Usuarios } from './usuario';
import { UsuarioService } from './usuario.service';
import { RolesService } from '../roles/roles.service';
import { Roles } from '../roles/roles';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuarios[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );

    
    
  }
}
