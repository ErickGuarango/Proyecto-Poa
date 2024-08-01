import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios/usuario';
import { Roles } from '../roles/roles';
import { UsuarioService } from '../usuarios/usuario.service';
import { RolesService } from '../roles/roles.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CarreraService } from 'src/app/service/carrera.service';
import { UnidadService } from 'src/app/service/unidad.service';

@Component({
  selector: 'app-admingenerate',
  templateUrl: './admingenerate.component.html',
  styleUrls: ['./admingenerate.component.css']
})
export class AdmingenerateComponent implements OnInit {

  public usuario: Usuarios = new Usuarios();
  public titulo: string = "Crear Usuario";
  public roles: Roles[] = []; // Lista de roles
  public opcion: string = ''; // Opción seleccionada

  constructor(
    private usuarioService: UsuarioService,
    private rolesService: RolesService, // Inyección del servicio de roles
    private carreraService: CarreraService, // Inyección del servicio de carrera
    private unidadService: UnidadService, // Inyección del servicio de unidad
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarUsuario();
    this.cargarRoles();
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
      error => console.error('Error al cargar roles', error)
    );
  }

  public create(): void {
    this.usuario.rol.id = 3; // Asigna el rol "ADMINISTRADOR" con id 3
    this.usuarioService.create(this.usuario)
      .subscribe(
        usuario => {
          Swal.fire('Administrador registrado correctamente', `Bienvenido ${usuario.nombre}!`, 'success');
          if (this.opcion === 'carrera') {
            this.router.navigate(['/usuCarrera/form'], { queryParams: { id: usuario.id } }); // Pasar el ID del usuario recién creado
          } else if (this.opcion === 'unidad') {
            this.router.navigate(['/usuUnidad/form'], { queryParams: { id: usuario.id } }); // Pasar el ID del usuario recién creado
          } else {
            this.router.navigate(['/app/cliente']);
          }
        },
        error => Swal.fire('Error', 'No se pudo registrar el administrador', 'error')
      );
  }
}
