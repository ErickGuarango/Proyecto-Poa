import { Component, OnInit } from '@angular/core';
import { Usuarios } from './usuario';
import { UsuarioService } from './usuario.service';
import { RolesService } from '../roles/roles.service';
import { CarreraService } from 'src/app/service/carrera.service';

import { Roles } from '../roles/roles';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public usuario: Usuarios = new Usuarios();
  public roles: Roles[] = []; // Propiedad para almacenar los roles
  public titulo: string = "Crear Usuario";
  public opcion: string = ''; // Propiedad para gestionar la opción seleccionada

  constructor(
    private usuarioService: UsuarioService,
    private rolesService: RolesService, // Inyección del servicio de roles
    private carreraService: CarreraService, // Inyección del servicio de carrera
  //  private unidadService: UnidadService, // Inyección del servicio de unidad
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarUsuario();
    this.cargarRoles(); // Llamar al método para cargar roles al inicializar el componente
  }

  cargarUsuario(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.usuarioService.getUsuario(id).subscribe(usuario => this.usuario = usuario);
      }
    });
  }

  cargarRoles(): void {
    this.rolesService.getRoles().subscribe(
      roles => this.roles = roles,
      error => console.error('Error al cargar roles', error) // Manejo de errores
    );
  }

  public create(): void {
    this.usuarioService.create(this.usuario)
      .subscribe(
        usuario => {
          Swal.fire('Usuario registrado correctamente', `Bienvenido ${usuario.nombre}!`, 'success');
          if (this.opcion === 'carrera') {
            this.router.navigate(['/ruta-a-pagina-de-carreras']); // Reemplaza con la ruta real
          } else if (this.opcion === 'unidad') {
            this.router.navigate(['/ruta-a-pagina-de-unidades']); // Reemplaza con la ruta real
          } else {
            this.router.navigate(['/app/cliente']);
          }
        },
        error => Swal.fire('Error', 'No se pudo registrar el usuario', 'error')
      );
  }
}
